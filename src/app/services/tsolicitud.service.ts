import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config';

@Injectable({
  providedIn: 'root'
})
export class TsolicitudService {

  constructor(private http: HttpClient) { }

  listar(token) {
    const uri = `${URI}/tsolicitud?token=${token}`;
    return this.http.get(uri);
  }
  agregar(tsolicitud, token) {
    const uri = `${URI}/tsolicitud?token=${token}`;
    return this.http.post(uri, tsolicitud);
  }
  actualizar(tsolicitud, id, token) {
    const uri = `${URI}/tsolicitud/${id}?token=${token}`;
    return this.http.put(uri, tsolicitud);
  }
  eliminar(id, token) {
    const uri = `${URI}/tsolicitud/${id}?token=${token}`;
    return this.http.delete(uri);
  }
}
