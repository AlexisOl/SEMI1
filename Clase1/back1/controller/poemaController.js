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
const redis = require('../Config/Valkey.js');
const Poema = require('../models/Poema.js');
const Categoria = require('../models/Categoria.js');
const {conectar, getRedis} = require('../Config/Valkey.js');
const { json } = require('body-parser');
const crearPoesia = async (req, res) => {

    const result = await redis.test();
    if (result.ok) {
        res.json(result);
    } else {
        res.status(500).json(result);
    }

}


const listarPoemas = async (req, res) => {
    try {
        const poemas = await Poema.findAll(
            {
                include: [{
                    model: Poeta,
                    atributes: ['nombre'],
                    as: 'poeta',
       
                }, {
                                 model: Categoria,
                    atributes: ['tipo'],
                }]
            }
        );

        const poemasFinal = poemas.map(poemas => {
            const key = poemas.url ? poemas.url.split('/').pop() : null;
            const urlFinal = key
                ? `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${encodeURIComponent(key)}`
                : null;

            return {
                ...poemas.toJSON(),
                url: urlFinal
            };
        });


        res.json(poemasFinal)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const agregarPoemaVisto = async(req, res) => {
    const {id} =req.body


    try {
    const guadarPoema = await getRedis();
    
    console.log(id);
    
    //solo 1 elemento
  //  const persistencia = await guadarPoema.incr(`poema:${id}:vistas`);
    // generacion de set

    const persistenciaSet = await guadarPoema.zAdd( 'poemas', {member:`poema:${id}`, score: 1, INCR: true })

    const top = await client.zRange('poemas', -3, -1, { WITHSCORES: true });


    
    res.json({ ok: true, vistas: persistenciaSet, top: top });


    } catch(err) {
        console.log(err, err.message);
        
    res.json({ ok: false, vistas: err });

    }
}

const detemniarVistasPoemas = async(req, res) => {
        const guadarPoema = await getRedis();


        try {

        }catch(err) {
                res.json({ ok: false, error: err });   }
 
}
module.exports = {
    crearPoesia,
    listarPoemas,
    agregarPoemaVisto
}