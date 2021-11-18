const express = require('express')
const morgan = require('morgan')

const alumnoRoutes = require('./routes/alumno.routes')
const postRoutes = require('./routes/post.routes')
const rolRoutes = require('./routes/rol.routes')

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR CORRIENDO CORRECTAMENTE');
});

app.use('/alumno', alumnoRoutes);
app.use('/post', postRoutes);
app.use('/rol', rolRoutes);

module.exports = app;