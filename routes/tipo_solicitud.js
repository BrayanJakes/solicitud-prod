const router = require('express').Router();
const {actualizar,agregar,eliminar,listar} = require('../controllers/tipo_solicitud');
const {verifyToken} = require('../middlewares/verificacion');

router.get('/tsolicitud',verifyToken, listar);
router.post('/tsolicitud',verifyToken, agregar);
router.put('/tsolicitud/:id',verifyToken, actualizar);
router.delete('/tsolicitud/:id',verifyToken, eliminar);

module.exports = router;