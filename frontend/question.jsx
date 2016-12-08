var React = require('react')
var $ = require('jquery')

var Question = React.createClass({
  getInitialState: function() {
    return({choice: null})
  },
  answerQuestion: function(e) {
    var that = this
    $.ajax({
      url: "/api/response",
      type: "POST",
      data: {id: that.props.key, choice: that.state.choice},
      success: function(message) {
        console.log(message)
      }
    })
  },
  updateChoice: function(e) {
    this.setState({choice: e.currentTarget.value})
  },
  render: function() {
    var question = this.props.question
    return(
      <form onSubmit={this.answerQuestion}>
        {question.question}<br/>
      <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choice1}/>{question.choice1}<br/>
        <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choice2}/>{question.choice2}<br/>
        <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choice3}/>{question.choice3}<br/>
        <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choice4}/>{question.choice4}<br/>
        <input type="submit" value={"Answer Question #" + question.id}/><br/>
      </form>
    )
  }
})

module.exports = Question
