import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {
createEmpleado: FormGroup;
submitted= false;
id: string |null;
titulo = 'Agregar Empleado';

  constructor(private fb: FormBuilder,
    private empleadoServices: EmpleadoService,
    private router: Router,
    private aRoute: ActivatedRoute ) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id) 
   }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEditarEmpleado(){
  this.submitted = true;
  if(this.createEmpleado.invalid){
    return;
  }
  
if(this.id ===  null)
{
this.agregarEmpleado();
} else{
  this.editarEmpleado(this.id);
}
}

agregarEmpleado(){
  const empleado: any ={
    nombre: this.createEmpleado.value.nombre,
    apellido: this.createEmpleado.value.apellido,
    documento: this.createEmpleado.value.documento,
    salario: this.createEmpleado.value.salario,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()

  }
this.empleadoServices.agregarEmpleado(empleado).then(() =>{
  console.log('empleado registrado con exito!');
  this.router.navigate(['/list-empleados'])
}).catch(error =>{
  console.log(error);
})

}
editarEmpleado(id: string){
  const empleado: any ={
    nombre: this.createEmpleado.value.nombre,
    apellido: this.createEmpleado.value.apellido,
    documento: this.createEmpleado.value.documento,
    salario: this.createEmpleado.value.salario,
    fechaActualizacion: new Date()

  }
  this.empleadoServices.actualizarEmpleado(id, empleado).then(() => {
      
  })
}
esEditar(){
  this.titulo = 'Editar Empleado'
  if(this.id !==null){
    this.empleadoServices.getEmpleado(this.id).subscribe(data =>{
      console.log(data.payload.data()['nombre']);
      this.createEmpleado.setValue({
        nombre: data.payload.data()['nombre'],
        apellido: data.payload.data()['apellido'],
        documento: data.payload.data()['documento'],
        salario: data.payload.data()['salario'],
      })
    })
  }
}
}
