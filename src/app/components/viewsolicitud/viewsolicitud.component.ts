import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';

import * as moment from 'moment';
import { Solicitud } from 'src/app/configuraciones/solicitud';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-viewsolicitud',
  templateUrl: './viewsolicitud.component.html',
  styles: []
})
export class ViewsolicitudComponent implements OnInit {

  token = localStorage.getItem('token');
  solicitud = {};
  fecha: string;
  rol: string = localStorage.getItem('rol');
  id: string;

  constructor(private activateRoute: ActivatedRoute,
              private solicitudService: SolicitudService,
              private router: Router) {

    this.activateRoute.params.subscribe((param) => {
      this.id = param.id;
      this.solicitudService.lista(this.token, param.id).subscribe((s: any) => {

        this.solicitud = s.solicitud;

        this.fecha = moment(s.solicitud.fecha).format('L');



      });
    });
   }

  ngOnInit() {
   
  }

  actualizar(form: NgForm){
    const solicitud: Solicitud = {
      cedula: form.value.cedula,
      email: form.value.email,
      nombre: form.value.nombre,
      tipoSolicitud: form.value.tsolicitud,
      estatus: form.value.estatus
    }

    this.solicitudService.actualizar(solicitud, this.id, this.token)
        .subscribe((a: any) => {
          this.router.navigate(['dashboard']);
        });
  }
}
