const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const productsRouter = require('./routes/search-query.js');

// POST requests
app.use('/search-query', productsRouter);

// GET requests
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


module.exports = { app, server };
