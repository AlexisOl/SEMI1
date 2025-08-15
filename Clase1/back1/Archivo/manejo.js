require('dotenv').config();
const fs = require('fs')
const { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const cliente = require('../Config/s3Config');
const crypto = require('crypto');


const subirArchivo = async (archivo) => {
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: archivo.name,
    Body: archivo.tempFilePath || archivo.buffer,
    ContentType: archivo.mimetype
  };

  const command = new PutObjectCommand(uploadParams);
  return await cliente.send(command);
};

const generarNombreArchivo = (nombreOriginal) => {
      const extension = nombreOriginal.split('.').pop();
  return `${Date.now()}.${extension}`;
}

module.exports = {
    subirArchivo,
    generarNombreArchivo
}