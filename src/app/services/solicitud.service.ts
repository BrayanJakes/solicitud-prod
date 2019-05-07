import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  uri = `${URI}/solicitud`;

  listar(token) {
    const url = `${this.uri}?token=${token}`;
    return this.http.get(url);
  }
  lista(token, id) {
    const url = `${this.uri}/${id}?token=${token}`;
    return this.http.get(url);
  }

  agregar(solicitud, token) {
    const url = `${this.uri}?token=${token}`;
    return this.http.post(url, solicitud);
  }
  actualizar(solicitud, id, token) {
    const uri = `${this.uri}/${id}?token=${token}`;
    return this.http.put(uri, solicitud);
  }
  eliminar(id, token) {
    const uri = `${this.uri}/${id}?token=${token}`;
    return this.http.delete(uri);
  }
}
