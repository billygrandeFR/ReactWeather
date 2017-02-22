var React = require ('react');

var WeatherMessage = (props) => {
  return(
    <h2>It's {props.propTemp} in {props.propLocation}</h2>
  );
};

module.exports = WeatherMessage;
