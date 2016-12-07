# Survey App
We're going to create a backend for an already existing frontend.

## FrontEnd Explanation
### App Component
The app has a navigation bar that brings you to three pages.
* Creating a new question
* Answering questions
* Seeing the responses <br/>
There are three links that change the URL path to either `/create`, `/questions`, or `/results`. Each of these paths mounts a different React component.   

### Create Component
The `create.jsx` component is a standard form with 5 inputs. Upon submission of the form, an AJAX request is sent to the server to create a new question.

### Questions Component
The `questions.jsx` component fetches all question from the database and passes each question down as a prop to the `Question` component.

### Question Component
Using the props passed down from the larger parent component `Questions`, a separate form is generated for each question. Every time you submit a question form, a new response should be created on the backend.

### Result Component
Fetches all responses from the database and displays the question and choice selected for each response.


## Instructions
Here are some steps to help you approach the project. <br/>
1) Set up the Express server with all the routes. 
  * `/server.js`
  * `/routes/api.js` <br/>
2) Test to see that each route works using Postman.  <br/>
3) Set up the Sequelize database connection.
  * `/server.js` <br/>
4) Generate the schema for the two models. 
  * `models/question.js`
  * `models/response.js` <br/>
5) Place Sequelize functions inside of the corresponding routes. For example, if you want to create a new `Question`, the Sequelize create function should be called within the `POST` - `/api/question` API endpoint.
  * `routes/api.js` <br/>
6) Make sure you know what you are sending over in the response on the backend.
  **hint: you may need to JSON.stringify(data) before sending off in the response**

## Grading Rubric
###Express Server Routing
* `GET` API endpoint to retrieve all Questions
  - `/api/question`
* `GET` API endpoint to retrieve all Responses
  - `/api/response`
* `GET` API endpoint to display an `index.html` page
  - `/*`
* `POST` API endpoint to create a Question
  - `/api/question`
* `POST` API endpoint to create a Response
  - `/api/response`

###Sequelize
* Defining the correct schema for the Question model
  - Question: string
  - Choice1: string
  - Choice2: string
  - Choice3: string
  - Choice4: string
* Defining the correct schema for the Response model
  - Choice: string
  - QuestionID: integer (created through the association)
* Fetch all Questions
* Fetch all Responses
* Create a Question
* Create a Response
* Generate two associations
  - Questions can have many responses
  - Responses belong to one question
