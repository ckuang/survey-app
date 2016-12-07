var React = require('react')
var ReactDOM = require('react-dom')
var $ = require('jquery')
var Create = require('./create.jsx')
var Questions = require('./questions.jsx')
var Results = require('./result.jsx')
import {Router, Route, Link, browserHistory} from 'react-router'

var App = React.createClass({
  render: function() {
    return(
      <div>
        <Link to='/create'>Create</Link> <br/>
        <Link to='/questions'>Answer</Link> <br/>
        <Link to='/results'>See Results</Link> <br/>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='create' component={Create}></Route>
      <Route path='questions' component={Questions}></Route>
      <Route path='results' component={Results}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
