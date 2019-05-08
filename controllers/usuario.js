const betcryp = require('bcryptjs');

const crud = require('../config/crudmongo');
const usuario_model = require('../models/usuario');

const ctrl = {};

const Crud = new crud();

ctrl.listar = async (req, res) => {
  

     await Crud.listar(usuario_model, req, res)
          
};

ctrl.lista = async (req, res) => {

    let id = req.params.id


    const listado =  await usuario_model.findById(id).skip(Number(req.query.desde || 0))
                            
    
    .exec({}, (err, solicitud)=>{
       if(err){
           return res.json({
               ok:false,
               err
            })
       }
        return res.json({
           ok:true,
           solicitud,
           
        })
    })
          
};

ctrl.agregar = async (req, res)=>{
  
   req.body.password = betcryp.hashSync(req.body.password, 10);

    const usuario = new usuario_model(req.body);

    Crud.agregar(usuario, req, res);
}


ctrl.actualizar = async (req, res)=> {
    if (req.body.password){
        req.body.password = betcryp.hashSync(req.body.password, 10);
    }
    
    let id = req.params.id;
    let body = req.body

    Crud.actualizar(usuario_model, id, body, req, res)
}

ctrl.eliminar = async (req, res)=>{
    let id = req.params.id;
    Crud.eliminar(usuario_model, id, req, res)
}


module.exports = ctrl