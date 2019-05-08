const router = require('express').Router();
const usuario_router = require('../controllers/usuario');
const {verifyToken} = require('../middlewares/verificacion');

router.get('/usuario', usuario_router.listar);
router.post('/usuario', usuario_router.agregar);
router.get('/usuario/:id',verifyToken, usuario_router.lista);
router.put('/usuario/:id',verifyToken, usuario_router.actualizar);
router.delete('/usuario/:id',verifyToken, usuario_router.eliminar);

module.exports = router;