import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  token = localStorage.getItem('token');
  rol = localStorage.getItem('rol');
  listados: string[] = [];

  constructor(private solicitudServices: SolicitudService,
              private router: Router) { 

  }

  ngOnInit() {
    this.solicitudes();

  }

  solicitudes() {
    this.solicitudServices.listar(this.token)
      .subscribe( (solicitud: any) => {
        
        if (solicitud.message === 'Token incorrecto!') {
          localStorage.removeItem('token');
          localStorage.removeItem('usuario');
          this.router.navigate(['login']);

        }
        this.listados = solicitud.listado;

      } );

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
            'Solicitud Eliminada',
            'success'
          );
          this.solicitudServices.eliminar(id, this.token).subscribe((eli: any) => {
            this.solicitudes();
          });
        }
      });

  }
}
