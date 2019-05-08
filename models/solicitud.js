const mongose = require('mongoose');
const validator = require('mongoose-unique-validator');
const { Schema } = mongose;

const estado = {
    values: ['Pendiente', 'Procesando', 'Aprobado', 'Rechazado'],
    message: '{VALUE} no es un rol permitido'
};

const solicitudSchema = new Schema({
    nombre: { type: String, required:[true, 'Debe agregar un nombre']},
    cedula: { type:  String,  unique: true, required:[true, 'Debe agregar una cedula']},
    email: { type:  String, required:[true, 'Debe agregar un email']},
    tipoSolicitud: { type: Schema.Types.ObjectId, ref: 'tipo_solicitudes', required:[true, 'Selecciona una solicitud']},
    estatus: {type: String, required: true, default: 'Pendiente', enum: estado},
    celular: {type: String},
    fecha: {type: Date, default: new Date().toLocaleString()},
    comentario: {type: String},
    respuesta: {type: String},

});

solicitudSchema.plugin(validator, {message: '{PATH} debe ser unico'});

module.exports = mongose.model('solicitudes', solicitudSchema);


