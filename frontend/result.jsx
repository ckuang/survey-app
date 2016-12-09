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
          console.log('question id',response.questionId)
          var question = response.question.question
          var response = response.choice
          var questNum = response.id
          return(
            <div key={idx}> Question `${response.questionId}` - {question}  : <strong>{response}</strong></div>
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
