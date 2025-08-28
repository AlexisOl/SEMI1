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

const listar = async (req, res) => {
  try {
    const poetas = await Poeta.findAll(
      {
        include: {
          model: Nacionalidad,
          atributes: ['tipo']
        }
      }
    );


    const poetasFinal = poetas.map(poeta => {
      const key = poeta.url ? poeta.url.split('/').pop() : null; 
      const urlFinal = key
        ? `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${encodeURIComponent(key)}`
        : null;

      return {
        ...poeta.toJSON(),
        url: urlFinal
      };
    });


    res.json(poetasFinal)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const cargar = async (req, res) => {
  const file = req.file;
  const { nombre, idNacionalidad } = req.body;

  if (!file) return res.status(400).json({ error: "No se ha enviado ningún archivo" });

  const fileName = `${Date.now()}-${file.originalname}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${fileName}`;
    res.status(200).json({
      message: "Archivo subido con éxito",
      url: fileUrl,
    });
  } catch (err) {
    console.error("Error al subir a S3:", err);
    res.status(500).json({ error: "Error al subir el archivo" });
  }
}

const crearPoeta = async (req, res) => {
  const file = req.file;
  const { nombre, idNacionalidad } = req.body;
  const t = await sequelize.transaction();
  
  
  if (!file) return res.status(400).json({ error: "No se ha enviado ningún archivo" });

  const fileName = `${Date.now()}-${file.originalname}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${fileName}`;




    console.log(nombre, idNacionalidad, "aca");
    
    await Poeta.create(
      {
        nombre,
        nacionalidad: idNacionalidad,
        url: fileName
      },
      { transaction: t }
    );

    await t.commit();
    res.json({ ok: true, mensaje: "Poeta creado con éxito" });
  } catch (err) {
    console.log(err);
    await t.rollback();
    res.status(500).json({ error: "Error al crear el poeta" });
  }
}



// Nombre único



// const crearPoeta = async (req, res) => {
//   console.log(req.body);
//   console.log(req.file); 

//   //const t = await sequelize.transaction();

//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No se subió ninguna imagen" });
//     }

//     const imagen = req.file; 
//  //   const { nombre, idNacionalidad } = req.body;

//     const nuevoNombre = generarNombreArchivo(imagen.originalname);

//     const archivoParaSubir = {
//       name: nuevoNombre,
//       tempFilePath: imagen.buffer, 
//       mimetype: imagen.mimetype
//     };

//     await subirArchivo(archivoParaSubir);

//     // await Poeta.create(
//     //   {
//     //     nombre,
//     //     idNacionalidad,
//     //     url: nuevoNombre
//     //   },
//     //   { transaction: t }
//     // );

//     //await t.commit();
//     res.json({ ok: true, mensaje: "Poeta creado con éxito" });

//   } catch (error) {
//  //   await t.rollback();
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };



module.exports = {
  listar,
  crearPoeta,
  cargar
}