const express = require('express');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const { getWeather } = require('./connect');

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
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
