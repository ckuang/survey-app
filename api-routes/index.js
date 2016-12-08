//require in express router
const router = require ("express").Router();

router.use('/question', require('./question-router'))
router.use('/response', require('./response-router'))


module.exports = router;