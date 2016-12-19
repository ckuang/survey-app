const Sequelize = require('sequelize')
const sequelizeConnection = require('../db.js')

var Response = sequelize.define('response', {
  title: {
    type: Sequelize.STRING,
    type: Sequelize.INTEGER
  }
})

module.exports = Response;
