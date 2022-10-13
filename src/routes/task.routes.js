const router = require('express').Router();
const { createTask, getTasks, deleteTask} = require('../controllers/task.controllers');

const validarJWT = require('../middlewares/validar-jwt');

// Crear nueva tarea
router.post('/task', [
    validarJWT,
], createTask);


router.get('/task', [
    validarJWT
], getTasks);

router.delete('/task/:id', [
    validarJWT
], deleteTask);



module.exports = router;