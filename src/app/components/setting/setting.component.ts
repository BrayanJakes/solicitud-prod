import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistraService } from 'src/app/services/registra.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/configuraciones/usuario';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styles: []
})
export class SettingComponent implements OnInit {

  token: string = localStorage.getItem('token');
  usuario = {};
  sonIguales = true;

  constructor(private registroService: RegistraService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
    this.activateRouter.params.subscribe((param) => {

      this.registroService.usuario(param.id, this.token).subscribe((p: any) => {

        this.usuario = p.solicitud;
      });
    });
  }

  ngOnInit() {
  }

  actualizar(form: NgForm, id){

    if (form.value.clave1 !== form.value.clave2) {
      return this.sonIguales = false;
    }
    const usuario: Usuario = {
      nombre: form.value.name,
      cedula: form.value.cedula,
      email: form.value.email,
      password: form.value.clave1,
      celular: form.value.celular
    };

    this.registroService.actualizar(usuario, id, this.token).subscribe((A: any) => {
      Swal.fire({

        title: 'Correcto',
        text: 'Usuario Actualizado con exito',
        type: 'success'


       });
      return this.router.navigate(['/dashboard']);
    });
  }

}
