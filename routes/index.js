// HERE WE WILL REROUTE EVERYTHING.

// FROM HERE, WE IMPORT THE tweetsRouter AND THE usersRouter
const createRouter = require('./create-route');
const questionsRouter = require('./questions-route');
const resultsRouter = require('./results-route')

// NOW WE EXPORT ALL THREE OF THE ROUTERS TO THE create-route.js, questions-route.js, results-route.ks
module.exports = {
    createRouter: createRouter,
    questionsRouter: questionsRouter,
    resultsRouter: resultsRouter
};
