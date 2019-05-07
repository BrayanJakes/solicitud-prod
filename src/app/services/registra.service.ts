import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URI} from '../config';

@Injectable({
  providedIn: 'root'
})
export class RegistraService {

  constructor(private http: HttpClient) {

   }
    url = `${URI}/usuario`;


   agregar(persona) {
     return this.http.post(this.url, persona);
   }

   listar() {
    return this.http.get(this.url);
   }

   usuario(id, token) {
     const uri = `${this.url}/${id}?token=${token}`;
     return this.http.get(uri);
  }

  actualizar(usuario, id, token) {
    const uri = `${this.url}/${id}?token=${token}`;
    return this.http.put(uri, usuario);
  }
}
