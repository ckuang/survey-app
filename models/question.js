const Sequelize = require('sequelize');
const sequelizeConnection = require('../server.js');

const Question = sequelizeConnection.define('question', {
    title: {
        type: Sequelize.STRING,
        validate: { len: [1, 500] }
    }
});

module.exports = Question;