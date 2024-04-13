const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

const User = sequelize.define('User', {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:true,
    primaryKey:true,
    autoIncrement:true
  },
  user_name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps:false
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = User

