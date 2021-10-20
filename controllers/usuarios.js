const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const { q, nombre="no name", apikey } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API',
        nombre, 
        edad
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}