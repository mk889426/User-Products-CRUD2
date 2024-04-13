const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
const User = require('../Models/User')

const Product = sequelize.define('Product', {
  pid:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    unique:true,
    autoIncrement:true
  },
  product_name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
    //   add foreign key
    uid:{
        type:DataTypes.INTEGER,
        references: {
            model:User,
            key:'uid'
        }
    }
}, {
  timestamps:false
});

sequelize.sync().then(() => {
    console.log('Product table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = Product

