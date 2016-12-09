var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://Rabiya@localhost:5432/survey-app');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('This is some bull****.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


  module.exports = sequelize