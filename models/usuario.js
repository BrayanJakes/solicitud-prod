const mongose = require('mongoose');
const validator = require('mongoose-unique-validator');
const { Schema } = mongose;

const roles = {
    values: ['Administrador', 'Usuario'],
    message: '{VALUE} no es un rol permitido'
};

const usuarioSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre requerido']},
    cedula: {type: String, unique:true, required:[true, 'Cedula requerido']},
    password: {type: String, required:[true, 'Contraseña requerido']},
    email: {type: String, unique:true, required:[true, 'Email requerido']},
    role: {type: String, required: true, default: 'Usuario', enum: roles},
    celular: {type: String},
    image: {type: String}
});

usuarioSchema.plugin(validator, {message: '{PATH} debe ser unico'});

module.exports = mongose.model('usuarios', usuarioSchema);


