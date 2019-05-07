import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogearService } from 'src/app/services/logear.service';
import { NgForm } from '@angular/forms';

import { Login } from '../../configuraciones/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  emailCorrecto = true;
  claveCorrecto = true;
  token: string;

  constructor(private router: Router,
              private loginServices: LogearService) {


  }

  ngOnInit() {
  }

  logear(form: NgForm) {


    const usuario: Login = {
      email: form.value.email,
      password: form.value.clave
    };

    this.loginServices.logear(usuario)
      .subscribe((p: any) => {

        if (p.message === 'Logeado') {

          this.token = p.JWT;
          localStorage.setItem('token', p.JWT);
          localStorage.setItem('usuario', p.user.nombre);
          localStorage.setItem('rol', p.user.role);
          localStorage.setItem('trpm', p.user._id);
          this.emailCorrecto = true;
          this.claveCorrecto = true;

          this.router.navigate(['dashboard']);
        }

        if (p.message === 'Email Incorrecto') {
          return this.emailCorrecto = false;
        }
        if (p.message === 'Contraseña invalida') {
          return this.claveCorrecto = false;
        }

      });
  }



}
