const mongose = require('mongoose');
const validator = require('mongoose-unique-validator');
const { Schema } = mongose;



const tipoSolicitudSchema = new Schema({
    tipo_solicitud: {type: String, unique: true ,required:[true, 'Tipo de Solicitud obligatorio']}
});

tipoSolicitudSchema.plugin(validator, {message: '{PATH} debe ser unico'});

module.exports = mongose.model('tipo_solicitudes', tipoSolicitudSchema);


