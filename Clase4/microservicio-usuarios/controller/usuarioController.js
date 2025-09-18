const Usuario = require('../models/Usuario');

const ping = async (req, res) => {
    res.json({ message: 'HOLA PING' });
};
const obtenerTodo = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};
const registro = async (req, res) => {
    try {
        const { username, password, pais } = req.body;
        if (!username || !password || !pais) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const nuevoUsuario = await Usuario.create({ username, password: password, pais });
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}
const existeUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: 'El id no puede ser nulo' });
        }

        const usuarioEspecifico = await Usuario.findByPk(id);

        if (usuarioEspecifico) {
            res.json(usuarioEspecifico);
        } else {
            return res.status(404).json({ error: 'El usuario no existe' });
        }
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
};

module.exports = { ping, obtenerTodo, registro , existeUsuario}