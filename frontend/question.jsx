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
      data: {id: that.props.question.id, choice: that.state.choice},
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
      <div>
        <form onSubmit={this.answerQuestion}>
          {question.question}<br/>
          <label htmlFor={question.choiceOne}>{question.choiceOne}</label>
          <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choiceOne}/>{question.choiceOne}<br/>

          <label htmlFor={question.choiceOne}>{question.choiceOne}</label>
          <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choiceTwo}/>{question.choiceTwo}<br/>

          <label htmlFor={question.choiceOne}>{question.choiceOne}</label>
          <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choiceThree}/>{question.choiceThree}<br/>

          <label htmlFor={question.choiceOne}>{question.choiceOne}</label>
          <input onChange={this.updateChoice} type="radio" name={question.id} value={question.choiceFour}/>{question.choiceFour}<br/>

          <input type="submit" value={"Answer Question #" + question.id}/><br/>
        </form>
      </div>
    )
  }
})

module.exports = Question
