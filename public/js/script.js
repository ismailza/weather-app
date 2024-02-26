
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('weatherForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `city=${encodeURIComponent(city)}`
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        if (data.cod === "404") {
          displayErrorMessage(data.message);
        } else {
          displayWeather(data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        displayErrorMessage(error.message);
      });
  });
});

const weatherIcons = {
  'Clear': 'clear.png',
  'Clouds': 'clouds.png',
  'Rain': 'rain.png',
  'Snow': 'snow.png',
  'Thunderstorm': 'thunderstorm.png',
  'Drizzle': 'drizzle.png',
  'Mist': 'mist.png',
};

const displayWeather = (data) => {
  let resultDiv = document.getElementById('weatherResult');
  if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id = 'weatherResult';
    document.body.appendChild(resultDiv);
  }
  resultDiv.classList.add('container', 'mt-2', 'p-3', 'border', 'rounded');
  let temperatureCelsius = (data.main.temp - 273.15).toFixed(2);
  let weatherIcon = weatherIcons[data.weather[0].main] || 'clear.png';

  resultDiv.innerHTML = `
    <div class="row">
      <div class="col-md-8">
        <h3>Weather in ${data.name}</h3>
        <p class="text-capitalize fs-5 text-muted text-secondary">${data.weather[0].description}</p>
        <div class="details">
          <p>Temperature: ${temperatureCelsius}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Pressure: ${data.main.pressure}hPa</p>
          <p>Wind speed: ${data.wind.speed}m/s</p>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <div class="weather-icon">
          <img src="/images/${weatherIcon}" alt="${weatherIcon}" class="img-fluid">
        </div>
      </div>
    </div>
  `;
};


const displayErrorMessage = (message) => {
  const resultDiv = document.getElementById('weatherResult');
  if (!resultDiv) {
    const newDiv = document.createElement('div');
    newDiv.id = 'weatherResult';
    document.body.appendChild(newDiv);
  }
  resultDiv.innerHTML = `<p>${message}</p>`;
};

(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()