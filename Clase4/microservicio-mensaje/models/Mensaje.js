const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');

const Mensaje = sequelize.define('mensaje',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comentario: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { tableName: 'mensaje', timestamps: false });
module.exports = Mensaje; 