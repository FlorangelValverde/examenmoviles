const Express = require('express');
const router = Express.Router();
const alumnosCtr = require('../controllers/alumno.controller')

router.get('/listar/', alumnosCtr.readAlumno); //// listar alumno

router.get('/listarID/:id', alumnosCtr.readAlumnoID); //// listar por id

router.post('/create/', alumnosCtr.createAlumno); //// crear alumno

router.delete('/delete/:id', alumnosCtr.deleteAlumno); //// eliminar alumno

router.put('/update/:id', alumnosCtr.updateAlumno); //// modificar alumno

module.exports = router;