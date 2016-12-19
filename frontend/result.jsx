var React = require('react')
var $ = require('jquery')

var Results = React.createClass({
  getInitialState: function() {
    return({responses: []})
  },
  componentDidMount: function() {
    var that = this
    var input2;
    $.ajax({
      url: '/api/response',
      type: 'GET',
      success: function(data) {
        input2 = data
        console.log('input2:',input2)
        that.setState({responses: input2})
      }
    })
  },
  render: function() {
    if (this.state.responses) {
      var responses = this.state.responses
    return (
      <div>
        {responses.map(function(response, idx){
          console.log('questionId:',response.questionId)
          var question = response.question.question
          const questNum = response.questionId
         
          var response = response.choice
          return(
            <div key={idx}> Question #{questNum} -  {question} : <strong>{response}</strong></div>
          )
        })}
      </div>
    )
    } else {
       return(<div></div>)
     }
   }
})

module.exports = Results
