const Sequelize = require('sequelize');

const sequelizeConnection = new Sequelize('postgres://lisa@localhost:5432/surveyapp');

sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

module.exports = sequelizeConnection;
