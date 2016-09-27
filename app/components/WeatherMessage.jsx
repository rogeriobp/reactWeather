var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
  }
});

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3><strong>The weather in {location} is {temp}!</strong></h3>
    </div>
  );
}

module.exports = WeatherMessage;
