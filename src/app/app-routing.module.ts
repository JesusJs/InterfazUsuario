import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Layaout/inicio/inicio.component';
import { ServiciosComponent } from './Layaout/servicios/servicios.component';
import { NuestroEquipoComponent } from './Layaout/nuestro-equipo/nuestro-equipo.component';
import { PortafolioComponent } from './Layaout/portafolio/portafolio.component';
import { ContactoComponent } from './Layaout/contacto/contacto.component';
import { TerminosCondicionesComponent } from './Layaout/terminos-condiciones/terminos-condiciones.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { IngresoComponent } from './Components/usuarios/ingreso.component';
import { RegistroComponent } from './Components/usuarios/registro.component';



const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Servicios', component: ServiciosComponent},
  {path: 'Equipo', component: NuestroEquipoComponent},
  {path: 'Portafolio', component: PortafolioComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Terminos', component: TerminosCondicionesComponent},
  {
    path:
    'usuarios',
     component: UsuariosComponent,
     children: [
       {path: 'Ingreso', component: IngresoComponent},
       {path: 'Registro', component: RegistroComponent},

     ]
    },
    {path: '**', pathMatch: 'full', redirectTo: 'usuarios/Ingreso'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
