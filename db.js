const Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nyapalgatkuoth@localhost:5432/survey-app')

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelizeConnection;
