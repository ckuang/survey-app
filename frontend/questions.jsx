var React = require('react')
var $ = require('jquery')
var Question = require('./question.jsx')

var Answer = React.createClass({
  getInitialState: function() {
    return ({questions: null})
  },
  componentDidMount: function() {
    var that = this
    let input;
    $.ajax({
      url: '/api/question',
      type: 'GET',
      success: function(data) {
        input = data
        console.log('input:', input)
        that.setState({questions: input})
      }
    })
  },
  render: function() {
  if(this.state.questions) {
      return(
        <div>
          {this.state.questions.map(function(question, idx){
            return (<Question key={idx} question={question}/>)
          })}
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
})

module.exports = Answer
