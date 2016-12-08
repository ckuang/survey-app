var React = require('react')
var $ = require('jquery')

var Results = React.createClass({
  getInitialState: function() {
    return({responses: null})
  },
  componentDidMount: function() {
    var that = this
    $.ajax({
      url: '/api/response',
      success: function(data) {
        that.setState({responses: data})
      }
    })
  },
  render: function() {
    console.log(this.state.responses)
    if (this.state.responses) {
      var responses = this.state.responses
    return (
      <div>
        {responses.map(function(response, idx){
          var question = response.question.question
          var response = response.choice
          return(
            <div key={idx}> {question} : <strong>{response}</strong></div>
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
