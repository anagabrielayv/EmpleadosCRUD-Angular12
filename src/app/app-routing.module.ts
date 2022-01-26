import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'iniciarsesion' , pathMatch: 'full'},
  {path: 'iniciarsesion' , component: LoginComponent},
  {path:'list-empleados', component: ListEmpleadosComponent},
  {path: 'createEmpleados' , component: CreateEmpleadoComponent},
  {path: 'editEmpleado/:id' , component: CreateEmpleadoComponent},
  {path: '**', redirectTo: 'iniciarsesion' , pathMatch: 'full'},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
