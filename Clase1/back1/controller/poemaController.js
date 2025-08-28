const Poeta = require('../models/poeta.js');
const Nacionalidad = require('../models/Nacionalidad.js');
const sequelize = require('../Config/DB.js');
const s3 = require("../Config/s3Config.js")
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const {
  subirArchivo,
  generarNombreArchivo,
} = require("../Archivo/manejo.js");

require('dotenv').config();
const redis = require('../Config/Valkey.js')

const crearPoesia = async(req, res) => {
    
    const result = await redis.test();
  if (result.ok) {
    res.json(result);
  } else {
    res.status(500).json(result);
  }

}

module.exports = {
    crearPoesia
}