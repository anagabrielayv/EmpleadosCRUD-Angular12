import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

signin(usuario, clave){
const ruta="https://servicioweb-2021.000webhostapp.com/iniciarsesion.php";
const formData: FormData = new FormData();
formData.append("usuario",usuario)
formData.append("clave",clave)

return this.http.post(ruta, formData).pipe(
  map((res) =>{
    return res
  })
)
}
 
   

}
