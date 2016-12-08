// IT ALL STARTS FROM THE DB FILE

// THIS IMPORTS SEQUELIZE
const Sequelize = require('sequelize');

// THIS CREATES THE SEQUELIZE CONNECTION
const sequelizeConnection = new Sequelize('postgres://parthjhaveri@localhost:5432/surveyapp');

// THIS STARTS THE CONNECTION, AUTHENTICITATES IT AND IF IT WORKS, THEN IT WILL LOG THE .then, OTHERWISE IT WILL LOG 
// THE .catch	
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err))

// NOW WE EXPORT THE DATABAST CONNECTION TO BE USED ELSEWHERE (CREATING MODELS, OR ACCESSING OUR DATABASE IN OUR API)
module.exports = sequelizeConnection;

