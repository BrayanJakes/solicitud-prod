
const crud = require('../config/crudmongo');
const tipo_model = require('../models/tipo_solicitud');

const ctrl = {};

const Crud = new crud();

ctrl.listar = async (req, res) => {
  

     await Crud.listar(tipo_model, req, res)
          
};

ctrl.agregar = async (req, res)=>{
  

    const usuario = new tipo_model(req.body);

    Crud.agregar(usuario, req, res);
}


ctrl.actualizar = async (req, res)=> {

    
    let id = req.params.id;
    let body = req.body

    Crud.actualizar(tipo_model, id, body, req, res)
}

ctrl.eliminar = async (req, res)=>{
    let id = req.params.id;
    Crud.eliminar(tipo_model, id, req, res)
}


module.exports = ctrl