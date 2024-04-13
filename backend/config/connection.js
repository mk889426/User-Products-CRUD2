const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('practice_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try{
    sequelize.authenticate();
    console.log('connection to db has successfully established');
  } catch (error) {
    console.error ('unable to connect to the database', error)
  }

  module.exports = sequelize
