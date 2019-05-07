import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import Swal from 'sweetalert2';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  nombre: string = localStorage.getItem('usuario');
  rol: string = localStorage.getItem('rol');
  trpm: string = localStorage.getItem('trpm');
  token: string = localStorage.getItem('token');

  listados: string[]

  constructor(private router: Router) {


               }

  ngOnInit() {

  }


  salir() {

    Swal.fire({
      title: 'Confirmacion',
      text: 'Desea salir?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Salir'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['login']);
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        localStorage.removeItem('rol');
        localStorage.removeItem('trpm');
      }
    });

  }



}
