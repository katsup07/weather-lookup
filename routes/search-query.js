const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather.js');


// Post /search-query
router.post('/', weatherController.getWeather);

module.exports = router;
