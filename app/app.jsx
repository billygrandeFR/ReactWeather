var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// Load css
require('style!css!./styles/app.css')

ReactDOM.render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={Main}>
  //   <Route path="about" component={About} />
  //   <Route path="examples" component={Examples} />
  //   <IndexRoute component={Weather} />
  //   </Route>
  // </Router>,
  <h1>Testing BlackSee</h1>,
  document.getElementById('app')
);
