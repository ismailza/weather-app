
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('weatherForm');
  form.addEventListener('submit', function(e) {
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


const displayWeather = (data) => {
  const resultDiv = document.getElementById('weatherResult');
  if (!resultDiv) {
    const newDiv = document.createElement('div');
    newDiv.id = 'weatherResult';
    newDiv.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp - 273.15}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
    document.body.appendChild(newDiv);
  } else {
    resultDiv.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp - 273.15}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  }
};

const displayErrorMessage = (message) => {
  const resultDiv = document.getElementById('weatherResult');
  if (!resultDiv) {
    const newDiv = document.createElement('div');
    newDiv.id = 'weatherResult';
    newDiv.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(newDiv);
  } else {
    resultDiv.innerHTML = `<p>${message}</p>`;
  }
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