var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=0f9d80925e5ccde7628623021d149541';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, function(err){
      throw new Error('Unable to fetch weather for that location.');

    })
  }
}

// 0f9d80925e5ccde7628623021d149541

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=0f9d80925e5ccde7628623021d149541
