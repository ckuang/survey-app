var React = require('react')
var $ = require('jquery')

var Create = React.createClass({
  getInitialState: function () {
    return({question: null, choice1: null, choice2: null, choice3: null, choice4: null})
  },
  makeQuestion: function (e) {
    var info = this.state
    console.log('info', info)
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
    this.setState({choice1: e.currentTarget.value})
  },
  updateChoice2: function(e) {
    this.setState({choice2: e.currentTarget.value})
  },
  updateChoice3: function(e) {
    this.setState({choice3: e.currentTarget.value})
  },
  updateChoice4: function(e) {
    this.setState({choice4: e.currentTarget.value})
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.makeQuestion}><br/>
          Write your new question here:
          <input type="text" placeholder="question" onChange={this.updateQuestion}></input><br/>
          Write your first answer choice here:
          <input type="text" placeholder="choice1" onChange={this.updateChoice1}></input><br/>
          Write your second answer choice here:  
          <input type="text" placeholder="choice2" onChange={this.updateChoice2}></input><br/>
          Write your third answer choice here:
          <input type="text" placeholder="choice3" onChange={this.updateChoice3}></input><br/>
          Write your choice4th answer choice here:
          <input type="text" placeholder="choice4" onChange={this.updateChoice4}></input><br/>
          <input type="submit" value="Make a New Question"></input>
        </form>
      </div>
    )
  }
})

module.exports = Create
