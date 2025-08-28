const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB.js');
const Categoria = require('./Categoria.js');
const Poeta = require('./poeta.js');

const Poema = sequelize.define('poemas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    fecha: {
     type: DataTypes.DATE,
    allowNull: false
  },
    id_Poeta: {
    type: DataTypes.INTEGER,
    allowNull: true,
        references: {
      model: Poeta,
      key: 'id'
    }
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },


  id_categoria: {
        type: DataTypes.INTEGER,
    allowNull: false,
            references: {
      model: Categoria,
      key: 'id'
    }
  },

  url: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'poemas',
  timestamps: false
});

// Relación
Poema.belongsTo(Poeta, { foreignKey: 'id_Poeta' , as: 'poeta' });
Poema.belongsTo(Categoria, { foreignKey: 'id_categoria' });

module.exports= Poema;
