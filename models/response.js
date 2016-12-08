const Sequelize = require('sequelize');
const sequelizeConnection = require('../server.js');

const Response = sequelizeConnection.define('response', {
    title: {
        type: Sequelize.STRING,
        validate: { len: [1, 500] }
    }
});

module.exports = Response;