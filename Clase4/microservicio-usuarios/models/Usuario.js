const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');
const Usuario = sequelize.define('usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password: { type: DataTypes.TEXT, allowNull: false },
        pais: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, { tableName: 'usuario', timestamps: false }); 
    
    module.exports = Usuario;