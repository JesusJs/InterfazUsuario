import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Layaout/inicio/inicio.component';
import { ServiciosComponent } from './Layaout/servicios/servicios.component';
import { NuestroEquipoComponent } from './Layaout/nuestro-equipo/nuestro-equipo.component';
import { PortafolioComponent } from './Layaout/portafolio/portafolio.component';
import { ContactoComponent } from './Layaout/contacto/contacto.component';
import { TerminosCondicionesComponent } from './Layaout/terminos-condiciones/terminos-condiciones.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { IngresoComponent } from './Components/usuarios/ingreso.component';
import { RegistroComponent } from './Components/usuarios/registro.component';
import { NavbarComponent } from './Layaout/navbar/navbar.component';
import { CardComponent } from './EcomerceComponents/card/card.component';
import { FooterComponent } from './EcomerceComponents/footer/footer.component';
import { CardImageComponent } from './EcomerceComponents/card-image/card-image.component';
import { NavbarEcomerceComponent } from './EcomerceComponents/navbar-ecomerce/navbar-ecomerce.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    NuestroEquipoComponent,
    PortafolioComponent,
    ContactoComponent,
    TerminosCondicionesComponent,
    UsuariosComponent,
    IngresoComponent,
    RegistroComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CardImageComponent,
    NavbarEcomerceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
