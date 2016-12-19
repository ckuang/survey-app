var React = require('react')
var $ = require('jquery')
var Create = React.createClass({
  getInitialState: function () {
    return({question: null, choiceOne: null, choiceTwo: null, choiceThree: null, choiceFour: null})
  },
  makeQuestion: function (e) {
    var info = this.state
    $.ajax({
      url: "/api/question",
      type: "POST",
      data: info,
      success: function(data) {
        console.log(data)
      }
    })
  },
  updateQuestion: function(e) {
    this.setState({question: e.currentTarget.value})
  },
  updateChoice1: function(e) {
    this.setState({choiceOne: e.currentTarget.value})
  },
  updateChoice2: function(e) {
    this.setState({choiceTwo: e.currentTarget.value})
  },
  updateChoice3: function(e) {
    this.setState({choiceThree: e.currentTarget.value})
  },
  updateChoice4: function(e) {
    this.setState({choiceFour: e.currentTarget.value})
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.makeQuestion}><br/>
          Write your new question here:
          <input type="text" placeholder="Enter a Question" onChange={this.updateQuestion}></input><br/>
          Write your first answer choice here:
          <input type="text" placeholder="Choice #1" onChange={this.updateChoice1}></input><br/>
          Write your second answer choice here:  
          <input type="text" placeholder="Choice #2" onChange={this.updateChoice2}></input><br/>
          Write your third answer choice here:
          <input type="text" placeholder="Choice #3" onChange={this.updateChoice3}></input><br/>
          Write your fourth answer choice here:
          <input type="text" placeholder="Choice #4" onChange={this.updateChoice4}></input><br/>
          <input type="submit" value="Make a New Question"></input>
        </form>
      </div>
    )
  }
})

module.exports = Create
