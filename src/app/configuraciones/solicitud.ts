export interface Solicitud {
    nombre: string;
    email: string;
    cedula: string;
    tipoSolicitud: string;
    comentario?: string;
    estatus?: string;

}