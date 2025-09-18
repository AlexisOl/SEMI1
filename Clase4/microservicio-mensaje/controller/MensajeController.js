// controller/MensajeController.js
const Mensaje = require('../models/Mensaje');

const ping = async (req, res) => {
    res.json({ message: 'HOLA PING MENSAJE' });
};

const obtenerTodo = async (req, res) => {
    try {
        const mensajes = await Mensaje.findAll();
        res.json(mensajes);
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).json({ error: 'Error al obtener mensajes' });
    }
};

const registro = async (req, res) => {
    try {
        const { comentario, fecha, idUsuario } = req.body;

        if (!comentario || !fecha || !idUsuario) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevoMensaje = await Mensaje.create({
            comentario,
            fecha,
            idUsuario
        });

        res.status(201).json(nuevoMensaje);
    } catch (error) {
        console.error('Error al registrar mensaje:', error);
        res.status(500).json({ error: 'Error al registrar mensaje' });
    }
};

module.exports = {
    ping,
    obtenerTodo,
    registro
};
