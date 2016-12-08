var Sequelize = require('sequelize');
var sequelizeConnection = require('../server.js');

var Response = sequelizeConnection.define('response', {
  choice:Sequelize.STRING,
  id:Sequelize.STRING
})

Response.sync({force: true}).then(function () {
  // Table created
  return Response.create();
});

module.exports = Response;