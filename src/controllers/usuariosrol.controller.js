const pool = require('../database');

const usuariosRolCtr = {}

// LISTAR TODOS LOS USUARIOS ROL
usuariosRolCtr.readAllUsuarioRol = async(req, res) => {
    try {
        const response = await pool.query('select *from usuarios_roles');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// LISTAR USUARIOS ROL POR ID
usuariosRolCtr.readUsuarioRol = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuarios_roles where id_usuarios_roles=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

// ELIMINAR USUARIOS ROL
usuariosRolCtr.delUsuarioRol = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuarios_roles where id_usuarios_roles=$1', [id]);

        return res.status(200).json(
            `Usuarios_Roles ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// CREAR USUARIOS ROL
usuariosRolCtr.createUsuarioRol = async(req, res) => {
    try {
        const { idusuario, idrol } = req.body;
        await pool.query('insert into usuarios_roles(idusuario, idrol) values($1,$2)', [idusuario, idrol]);

        return res.status(200).json(
            `Usuarios_Roles ${ idusuario } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}


// ACTUALIZAR USUARIOS ROL
usuariosRolCtr.updateUsuarioRol = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { idusuario, idrol } = req.body;
        await pool.query('update usuarios_roles set idusuario=$1, idrol=$2 where id_usuarios_roles=$3', [idusuario, idrol, id]);

        return res.status(200).json(
            `Usuarios_Roles ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = usuariosRolCtr;