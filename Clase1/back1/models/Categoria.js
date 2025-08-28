const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');

const Categoria = sequelize.define('categoria', {
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
  tableName: 'categoria',
  timestamps: false
});

module.exports= Categoria;
