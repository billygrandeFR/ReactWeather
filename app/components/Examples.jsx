var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
  <p>Here are some example locations.</p>
  <ol>
    <li>
      <Link to='/?location=Manchester'>Manchester, UK</Link>
    </li>
    <li>
      <Link to='/?location=Paris'>Paris, FR</Link>
    </li>
    <li>
      <Link to='/?location=Cluj'>Cluj Napoca, RO</Link>
    </li>
  </ol>
</div>
  )
};

module.exports = Examples;
