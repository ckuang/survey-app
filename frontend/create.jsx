var React = require('react')
var $ = require('jquery')

var Create = React.createClass({

  getInitialState: function () {
    return({question: null, one: null, two: null, three: null, four: null})
  },

  makeQuestion: function (e) {
    var info = this.state
    $.ajax({
      url: "/api/question",
      type: "POST",
      data: [{question: this.state.question, 
              one: this.state.one.,
              two: this.state.two,
              three: this.state.three,
              four: this.state.four
            }],
      success: function(data) {
        console.log(data)
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
          
          <h1>{this.state.question}</h1>
          <input type="text" placeholder="question" onChange={this.updateQuestion}></input><br/>
          
          <p>{this.state.one}</p>
          <input type="text" placeholder="choice1" onChange={this.updateChoice1}></input><br/>
          
          <p>{this.state.two}</p>
          <input type="text" placeholder="choice2" onChange={this.updateChoice2}></input><br/>
          
          <p>{this.state.three}</p>
          <input type="text" placeholder="choice3" onChange={this.updateChoice3}></input><br/>
          
          <p>{this.state.four}</p>
          <input type="text" placeholder="choice4" onChange={this.updateChoice4}></input><br/>
          
          <input type="submit" value="Make a New Question"></input>

        </form>
      </div>
    )
  }
})

module.exports = Create
