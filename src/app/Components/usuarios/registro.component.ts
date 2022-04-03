import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../Models/usuario.model';


@Component({
  selector: 'app-registro',
  template: `
    <div class="caja col-md-12">
      <div class="caja-registro">
      <div class="limiter animated fadeInLeft">
    <div class="container-login100" style="padding: 22px;">
        <div class="wrap-login100 p-t-50 p-b-90">

            <form  (ngSubmit)="onSubmit(Registro)"
                #Registro="ngForm"
            class="login100-form validate-form flex-sb flex-w">
                <span
                 class="animated fadeIn span-login">NOMBRE</span>
                <div class="wrap-input100 m-b-10">
                    <input class="input100 input-ingreso" [ngClass]="Registro.submitted && Registro.controls['nombre'].errors ? 'Input-erros' :''"
                           type="text"
                           name="nombre"
                           [(ngModel)]="usuario.nombre"
                           required
                           minlength="4"
                           autocomplete="none"
                           >

                    <span *ngIf="Registro.submitted && Registro.controls['nombre'].errors"  class="message-invalid" >   <span  class="material-icons-outlined">error</span>  REQUERIDO</span>
                </div>

                <span
                 class=" animated fadeIn span-login">APELLIDO</span>
                <div class="wrap-input100 m-b-16" data-validate = "Password is required">
                    <input class="input100 input-ingreso" [ngClass]="Registro.submitted && Registro.controls['apellido'].errors ? 'Input-erros' :''"
                           type="text"
                           name="apellido"
                           [(ngModel)]="usuario.apellido"
                           required
                           minlength="4"
                          >
                          <span *ngIf="Registro.submitted && Registro.controls['apellido'].errors" class="message-invalid"> <span  class="material-icons-outlined">error</span>  REQUERIDO</span>
                </div>
                <span
                 class="animated fadeIn span-login">EMAIL</span>
                <div class="wrap-input100 m-b-10">
                    <input class="input100 input-ingreso" [ngClass]="Registro.submitted && Registro.controls['enail'].errors ? 'Input-erros' :''"
                           type="email"
                           name="email"
                           [(ngModel)]="usuario.email"
                           required
                           email
                           autocomplete="none"
                           >

                           <span *ngIf="Registro.submitted && Registro.controls['email'].errors"
                            class="message-invalid"> <span class="material-icons-outlined">error</span>  REQUERIDO</span>
                </div>
                <span
                 class="animated fadeIn span-login">CONTRASEÑA</span>
                <div class="wrap-input100 m-b-10">
                    <input class="input100 input-ingreso" [ngClass]="Registro.submitted && Registro.controls['password'].errors ? 'Input-erros' :''"
                           type="password"
                           name="password"
                           required
                           minlength="6"
                           [(ngModel)]="usuario.password"
                           autocomplete="none"
                           >

                           <span *ngIf="Registro.submitted && Registro.controls['password'].errors" class="message-invalid"> <span  class="material-icons-outlined">error</span>  REQUERIDO</span>
                </div>
                <div class="container-login100-form-btn m-t-17 btn-ingreso">
                    <button class="btn-sm btn-ingresar" type="submit">
                        <span>Registro</span>
                    </button>
                </div>
                <div>
                    </div>
            </form>
        </div>
    </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  usuario!: UsuarioModel;
  constructor() { }

  ngOnInit(): void {

    this.usuario = new UsuarioModel();
    this.usuario.nombre = ''
    this.usuario.email = 'ejemplo@email.com';
    this.usuario.apellido = 'Pérez'
    this.usuario.password = '********'
  }
  onSubmit(form: NgForm){
    if(form.invalid){return};

    console.log("formulario enviado");
    console.log(this.usuario);
    console.log(form)

  }
}
