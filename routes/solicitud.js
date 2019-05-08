const router = require('express').Router();
const {actualizar,agregar,eliminar,listar, lista} = require('../controllers/solicitud');
const {verifyToken} = require('../middlewares/verificacion')

router.get('/solicitud',verifyToken, listar);
router.get('/solicitud/:id',verifyToken, lista);
router.post('/solicitud',verifyToken, agregar);
router.put('/solicitud/:id',verifyToken, actualizar);
router.delete('/solicitud/:id',verifyToken, eliminar);

module.exports = router;