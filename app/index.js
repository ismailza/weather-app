const express = require('express');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/weather', async (req, res) => {
  const city = req.body.city;
  console.log('city', city);
  try {
    const data = await getWeather(city);
    res.json(data);
    const html = `
      <h1>Weather in ${city}</h1>
      <p>Temperature: ${data.main.temp}</p>
      <p>Feels like: ${data.main.feels_like}</p>
      <p>Humidity: ${data.main.humidity}</p>
    `;
    // res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

const getWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
