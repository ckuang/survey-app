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
      type: 'GET',
      success: function(data) {
        that.setState({responses: data})
      }
    })
  },
  render: function() {
    if (this.state.responses) {
      var responses = this.state.responses
    return (
      <div>
        {responses.map(function(response, idx){
          var question = response.id
          var response = response.answer
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
