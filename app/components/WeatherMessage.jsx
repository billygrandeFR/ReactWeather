var React = require ('react');

var WeatherMessage = (props) => {
  return(
    <div>
    <h2>It's {props.propTemp} in {props.propLocation}</h2>
    <h3>xxx</h3>

  </div>
  );
};

module.exports = WeatherMessage;
