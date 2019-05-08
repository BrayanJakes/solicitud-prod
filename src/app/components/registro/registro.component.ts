import { Component, OnInit } from '@angular/core';
import { RegistraService } from 'src/app/services/registra.service';
import {NgForm, FormControl, FormGroup, Validators} from '@angular/forms';

import {Usuario} from '../../configuraciones/usuario';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  form: NgForm;
  sonIguales = true;
  emailIguales = false;
  cedulaIguales = false;


  constructor(private registroServices: RegistraService,
              private router: Router) { }

  ngOnInit() {


  }

  registrar(form) {
    if (form.value.clave1 !== form.value.clave2) {
      return this.sonIguales = false;
    }




    const usuario: Usuario = {
      nombre: form.value.name,
      email: form.value.email,
      cedula: form.value.cedula,
      password: form.value.clave1,
      celular: form.value.calular
    };

    this.registroServices.agregar(usuario).subscribe((p: any) => {
      if (!p.err) {
        Swal.fire({

            title: 'Correcto',
            text: 'Usuario creado con exito',
            type: 'success'


        });
        return this.router.navigate(['login']);

      }

      if (p.err.errors.cedula) {
        this.cedulaIguales = true;

      }
      if (p.err.errors.email) {
         this.emailIguales = true;

      }


    });
  }
}
