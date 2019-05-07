import { Component, OnInit } from '@angular/core';
import { TsolicitudService } from 'src/app/services/tsolicitud.service';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import {Tsolicitud} from '../../configuraciones/tsolicitud';

@Component({
  selector: 'app-tsolicitud',
  templateUrl: './tsolicitud.component.html',
  styles: []
})
export class TsolicitudComponent implements OnInit {

  form = {
    nombre: ''
  };

  token: string = localStorage.getItem('token');
  listados: string[] = [];

  constructor(private tsolicitudServices: TsolicitudService) { }

  ngOnInit() {
  this.listar();
  }

  guardar(form: NgForm) {


    const tsolicitud: Tsolicitud = {
      tipo_solicitud: form.value.nombre
    }

    this.tsolicitudServices.agregar(tsolicitud, this.token).subscribe((t) => {

    this.listar();
    });
    form.resetForm();
  }

  listar() {
    this.tsolicitudServices.listar(this.token)
      .subscribe((t: any) => {
        this.listados = t.listado;
      });
  }

  borrar(id) {

    Swal.fire({
      title: 'Confirmacion',
      text: 'Seguro que desea eliminarlo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'Tipo de solicitud Eliminado',
          'success'
        );
        this.tsolicitudServices.eliminar(id, this.token).subscribe((eli) => {

          this.listar();
        });
      }
    });


  }

}
