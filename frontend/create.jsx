var React = require('react')
var $ = require('jquery')
var Create = React.createClass({
  getInitialState: function () {
    return({question: null, one: null, two: null, three: null, four: null})
  },
  makeQuestion: function (e) {
    var that = this
    var info = this.state
    $.ajax({
      url: "/api/question",
      type: "POST",
      data: info,
      success: function(data) {
        that.setState(data)
      }
    })
  },
  updateQuestion: function(e) {
    this.setState({question: e.currentTarget.value})
  },
  updateChoice1: function(e) {
    this.setState({one: e.currentTarget.value})
  },
  updateChoice2: function(e) {
    this.setState({two: e.currentTarget.value})
  },
  updateChoice3: function(e) {
    this.setState({three: e.currentTarget.value})
  },
  updateChoice4: function(e) {
    this.setState({four: e.currentTarget.value})
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
          Write your fourth answer choice here:
          <input type="text" placeholder="choice4" onChange={this.updateChoice4}></input><br/>
          <input type="submit" value="Make a New Question"></input>
        </form>
      </div>
    )
  }
})

module.exports = Create
