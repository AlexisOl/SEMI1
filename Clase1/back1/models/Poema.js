const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');
const Nacionalidad = require('./Nacionalidad.js');

const Poema = sequelize.define('Poema', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  cuerpo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Poeta: {
    type: DataTypes.TEXT,
    allowNull: true,
    
  },
  url: {
    
  }
}, {
  tableName: 'poeta',
  timestamps: false
});

// Relación
Poeta.belongsTo(Nacionalidad, { foreignKey: 'nacionalidad' });

module.exports= Poema;
