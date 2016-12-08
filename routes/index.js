//set a variable with your router.js file and require it
const question = require('./question-router.js');
const response = require('./response-router.js')


//module export and set a new field to the variable
module.exports = {
	questionRouteFile: question,
	responseRouteFile: response
}