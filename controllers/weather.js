const fetch = require('node-fetch');

exports.getWeather = (req, res, next) => {
  const { lat, lon } = req.body;
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9878f3f16a9a315010430eebb23e2ab0&units=metric`
  if(lon >= -180  && lon <= 180 && lat >= -90 && lat <= 90){
    fetch(endpoint)
    	.then((weatherRes) => weatherRes.json())
    	.then((weatherData) => {
        console.log(weatherData);
        if(weatherData.name === '')
          weatherData.name = 'Location name unknown';
        res.render('weather', {
          weatherData,
        });
      });
  }
}