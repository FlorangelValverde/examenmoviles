const Express = require('express');
const router = Express.Router();
const postCtr = require('../controllers/post.controller')

router.get('/listar', postCtr.readPost); //// listar post

router.get('/listarID/:id', postCtr.readPostID); //// listar por id

router.post('/create/', postCtr.createPost); //// crear post

router.delete('/delete/:id', postCtr.deletePost); //// eliminar post

router.put('/update/:id', postCtr.updatePost); //// modificar post

module.exports = router;