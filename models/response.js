const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const  Question = require ('./question')



var Response = sequelizeConnection.define('response',{
    resp: {type: Sequelize.STRING}

})

 //Response.belongsTo(Question);


module.exports = Response;