const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');
const Nacionalidad = require('./Nacionalidad.js');

const Poeta = sequelize.define('Poeta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Nacionalidad,
      key: 'id'
    }
  }
}, {
  tableName: 'poeta',
  timestamps: false
});

// Relación
Poeta.belongsTo(Nacionalidad, { foreignKey: 'nacionalidad' });

module.exports= Poeta;
