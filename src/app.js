const express = require('express')
const morgan = require('morgan')

const alumnoRoutes = require('./routes/alumno.routes')
const postRoutes = require('./routes/post.routes')
const rolRoutes = require('./routes/rol.routes')
const usuariosRoutes = require('./routes/usuarios.routes')
const usuarioRolRoutes = require('./routes/usuariosrol.routes')
const authRoutes = require ('./routes/auth.routes')

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR CORRIENDO CORRECTAMENTE');
});

app.use('/post', postRoutes);
app.use('/rol', rolRoutes);
app.use('/usuarios', usuariosRoutes); 
app.use('/usuarios-rol', usuarioRolRoutes);
app.use('/auth', authRoutes);

module.exports = app;