const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');

const Nacionalidad = sequelize.define('Nacionalidad', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  tableName: 'nacionalidades',
  timestamps: false
});

module.exports= Nacionalidad;
