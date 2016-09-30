var React = require('react');
var {Link} = require('react-router');

var About = () => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>React weather app is a webapp built using React and Foundation as a project for the React Web App Developer course by Andrew Mead.</p>
      <p>It fetches data from Open Weather Map API, returning the current weather of a city informed by the user.</p>
      <p>You can find the related links below:</p>
      <ul>
        <li>
          <a href='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview'>The Complete React Web App Developer Course - by Andrew Mead</a>
        </li>
        <li>
          <a href='https://facebook.github.io/react/'>React Web Page - JS Library</a>
        </li>
        <li>
          <a href='http://foundation.zurb.com/'>Foundation Web Page - CSS Framework</a>
        </li>
        <li>
          <a href='https://github.com/'>GitHub - Repository</a>
        </li>
        <li>
          <a href='https://www.heroku.com/home'>Heroku - Deploy and run your apps</a>
        </li>
        <li>
          <a href='http://openweathermap.org/'>OpenWeatherMap - Weather forecasts</a>
        </li>
      </ul>
    </div>

  );
}

module.exports = About;
