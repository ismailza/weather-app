const axios = require('axios');

const getWeather = async (req, res) => {
  const { city } = req.body.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
