import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Solicitud} from '../../configuraciones/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { TsolicitudService } from 'src/app/services/tsolicitud.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styles: []
})
export class SolicitudComponent implements OnInit {

  token: string = localStorage.getItem('token');
  tsolicitudes: any[] = [];
  cedulaE = false;
  emailE = false;



  constructor(private solicitudService: SolicitudService,
              private tsolitudService: TsolicitudService,
              private router: Router) {

              }

  ngOnInit() {


    this.tsolitudService.listar(this.token)
    .subscribe((t: any) => {
      this.tsolicitudes = t.listado;
    });
  }

  guardar(form: NgForm) {

    const solicitud: Solicitud = {
      cedula: form.value.cedula,
      nombre: form.value.nombre,
      email: form.value.email,
      tipoSolicitud: form.value.tsolicitud,
      comentario: form.value.mensaje
     };



    this.solicitudService.agregar(solicitud, this.token)
      .subscribe((s: any) => {

       if (!s.err) {
        Swal.fire({

          title: 'Correcto',
          text: 'Solicitud creado con exito',
          type: 'success'


         });

        return this.router.navigate(['dashboard']);
       }

       if (s.err.code === 11000) {
            return this.emailE = true;
       }

       if (s.err.message === 'solicitudes validation failed: cedula: cedula debe ser unico') {
          return this.cedulaE = true;
       }





      });
  }

}
