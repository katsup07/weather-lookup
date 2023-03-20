const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const productsRouter = require('./products/search-query.js');

app.use('/search-query', productsRouter);

app.use('/', (req, res, next) => {
	weatherData = {
		name: '',
		weather: [{ description: '' }],
		main: { temp: '' },
		wind: { speed: '' },
		main: { humidity: '' },
	};
	res.render('weather', {
		weatherData,
	});
});

const server = app.listen(5000);

function getInfo() {
	return 'hi';
}

module.exports = { getInfo, app, server };
