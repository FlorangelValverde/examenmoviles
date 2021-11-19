const pool = require('../database');
const helpers = require('../libs/helpers');

const usuariosCtr = {}

// LISTAR TODOS LOS USUARIOS
usuariosCtr.readAllUsuario = async(req, res) => {
    try {
        const response = await pool.query('select *from usuarios');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// LISTAR USUARIOS POR ID
usuariosCtr.readUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuarios where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

// ELIMINAR USUARIOS
usuariosCtr.delUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuarios where idusuarios=$1', [id]);

        return res.status(200).json(
            `Usuarios ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// CREAR USUARIOS
usuariosCtr.createUsuario = async(req, res) => {
    try {
        const { username, password } = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuarios(username, password) values($1,$2)', [username, password2]);

        return res.status(200).json(
            `Usuarios ${ username } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}


// ACTUALIZAR USUARIOS
usuariosCtr.updateUsuario = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { username, password } = req.body;
        await pool.query('update usuarios set username=$1, password=$2 where idusuario=$3', [username, password, id]);

        return res.status(200).json(
            `Usuarios ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = usuariosCtr;