const crud = require('../config/crudmongo');
const solicitudModel = require('../models/solicitud');

const ctrl = {};

const Crud = new crud();

ctrl.listar = async (req, res) => {




    const listado =  await solicitudModel.find().skip(Number(req.query.desde || 0))
                            .populate('tipoSolicitud', 'tipo_solicitud')
    
    await solicitudModel.countDocuments({}, (err, count)=>{
       if(err){
           return res.json({
               ok:false,
               err
            })
       }
        return res.json({
           ok:true,
           listado,
           contador: count
        })
    })
          
};

ctrl.lista = async (req, res) => {

    let id = req.params.id


    const listado =  await solicitudModel.findById(id).skip(Number(req.query.desde || 0))
                            .populate('tipoSolicitud', 'tipo_solicitud')
    
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
  


    const usuario = new solicitudModel(req.body);

    Crud.agregar(usuario, req, res);
}


ctrl.actualizar = async (req, res)=> {

    
    let id = req.params.id;
    let body = req.body

    Crud.actualizar(solicitudModel, id, body, req, res)
}

ctrl.eliminar = async (req, res)=>{
    let id = req.params.id;
    Crud.eliminar(solicitudModel, id, req, res)
}


module.exports = ctrl