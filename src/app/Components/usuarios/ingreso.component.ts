import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../Models/usuario.model';

@Component({
  selector: 'app-ingreso',
  template: `
    <div class="caja col-md-12">
      <div class="caja-ingreso">
      <div class="limiter animated fadeInLeft">
    <div class="container-login100" style="padding: 22px;">
        <div class="wrap-login100 p-t-50 p-b-90">

            <form

            class="login100-form validate-form flex-sb flex-w" >
                <span
                 class="animated fadeIn span-login">EMAIL</span>
                <div class="wrap-input100 m-b-10">
                    <input class="input100 input-ingreso"
                           type="text"
                           name="email"
                           [(ngModel)]="usuario.email"
                           required
                           email
                           autocomplete="none"
                           >

                    <span class="focus-input100"></span>
                </div>

                <span
                 class=" animated fadeIn span-login">CONTRASEÑA</span>
                <div class="wrap-input100 m-b-16" data-validate = "Password is required">
                    <input class="input100 input-ingreso"
                           type="password"
                           name="password"
                           [(ngModel)]="usuario.password"
                           required
                           minlength="6"
                          >
                    <span class="focus-input100"></span>
                </div>
                <div class="flex-sb-m w-full " style="    display: flex;
                  justify-content: unset;
                  width: 100%;
                  margin-top: 0rem;
                  ">
                  <div class="contact100-form-checkbox" style="
                  width: 16%;
                  ">
                  <div class="form-check form-switch">
                  <label class="switch" style="    margin-left: -2rem;
                  margin-bottom: 0rem;">
                  <input type="checkbox">
                  <div class="slider round"></div>
                  </label>

                  </div>
                  </div>
                  <label class="form-check-label" for="flexSwitchCheckDefault" style=" padding-left: 25px;
                  padding-top: 3%; color: #F5F5F5">Suscribirse al Newsletter</label>
                </div>

                <div class="container-login100-form-btn m-t-17 btn-ingreso">
                    <button class="btn-sm btn-ingresar" type="submit">
                        <span>Ingreso</span>
                    </button>
                </div>
                <div>
                <div class="flex-sb-m w-full p-t-3 p-b-24 olv-contraseña" >
                        <a routerLink="/registro" style="text-decoration: none;;" class="txt1 span-login">
                            Olvide Contraseña
                        </a>
                </div>
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
export class IngresoComponent implements OnInit {

  usuario!: UsuarioModel;
  constructor() { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'ejemplo@email.com';
    this.usuario.password = '********'
  }


}
