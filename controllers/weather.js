const fetch = require('node-fetch');

exports.getWeather = (req, res, next) => {
	const { lat, lon } = req.body;
	const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9878f3f16a9a315010430eebb23e2ab0&units=metric`;
	const blankWeatherFields = {
		name: '',
		weather: [{ description: '' }],
		main: {},
		wind: {},
	};

	if (lon === '' || lat === '')
		return res.render(
			'weather',
			(weatherData = {
				...blankWeatherFields,
				error: 'Coordinates must be numbers and cannot be blank.',
			})
		);

	if (lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90) {
		fetch(endpoint)
			.then((weatherRes) => weatherRes.json())
			.then((weatherData) => {
				if (weatherData.name === '') weatherData.name = 'Location name unknown';
				res.render('weather', {
					weatherData,
				});
			});
	} else {
		weatherData = {
      ...blankWeatherFields,
			error:
				'Coordinates must be numbers, where longitude is between -180 and 180, and latitude is between -90 and 90.',
		};
		res.render('weather', weatherData);
	}
};
