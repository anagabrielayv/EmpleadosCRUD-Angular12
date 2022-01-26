import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      loginForm = new FormGroup({
        usuario: new FormControl(),
        clave: new FormControl()
      });

  constructor( 
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
   
  }

  verificarLogin(values){
    this.loginService.signin(values.usuario, values.clave).subscribe(
      (res) => {
        console.log(res);
        this.evaluarRespuesta(res);
      }
    
    )

  }
  evaluarRespuesta(res){
    if(res == "-1"){
alert("El usuario no existe");
    }
    else if(res == "-2"){
      alert("La contraseña es incorrecta");
    } else {
      alert("Bienvenido!!");
      this.router.navigate(['/list-empleados'])
    }
  }
}
