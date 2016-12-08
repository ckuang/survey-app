const Sequelize = require('sequelize');
const sequelizeConnection = new Sequelize('postgres://tionna@localhost:5432/surveyapp');


//Test to see if the connection worked
sequelizeConnection
.authenticate()
.then((data) => console.log('Sequelize connection successful'))
.catch((error) => console.log('Unable to connect to the database:', error));


module.exports = sequelizeConnection;