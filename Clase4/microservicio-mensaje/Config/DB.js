// Config/DB.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexión correcta'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = sequelize;
