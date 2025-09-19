

require('dotenv').config();
const axios = require('axios');

const USUARIO_API = process.env.USUARIO_API;

const UsuarioFeign = {
  obtenerPorId: async (id) => {
    try {
      const response = await axios.get(`${USUARIO_API}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener usuario ${id}:`, error.message);
      throw error;
    }
  },

};

module.exports = UsuarioFeign;
