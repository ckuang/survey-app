// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://lisa@localhost:5432/surveyapp');
// module.exports = sequelize;


const router = require('express').Router();


//This is at /api
router.use('/question', require('./questionRoute'));
router.use('/response', require('./responseRoute'));

module.exports = router;