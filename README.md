# Weather App

This is a simple weather app that utilizes the OpenWeatherMap API to fetch and display the current weather conditions of any city you search for. It's designed to be user-friendly, providing immediate weather updates with just a city name input.

![Screenshot of the Weather App](public/screenshots/screencapture-localhost-3000-2024-02-27-16_49_15.png)

## Features

- **City Search**: Easily search for any city across the globe and get real-time weather conditions.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience on any device, whether it be a desktop, tablet, or smartphone.
- **Weather Details**: Displays detailed weather information including temperature, humidity, wind speed, and more.

## Technologies

This project is built using a combination of modern technologies to ensure high performance and scalability:

- **Node.js**: A JavaScript runtime environment that executes JavaScript code outside of a web browser.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **JavaScript**: The scripting language used to create dynamic content on the web.
- **HTML**: The standard markup language for creating web pages and web applications.
- **Bootstrap**: A front-end framework for developing responsive and mobile-first websites.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests to the OpenWeatherMap API.
- **OpenWeatherMap API**: A service that provides weather data, including current weather, forecasts, and historical data to the developers of web services and mobile applications.

## Getting Started

You can access the image on [Docker Hub](https://hub.docker.com/r/ismailza/weather-app) and run the application in a container.

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) (if you want to run the application in a container)
- [Node.js](https://nodejs.org/en/download/) (if you want to run the application without Docker)
- [OpenWeatherMap API key](https://openweathermap.org/appid) (required to get the weather data)

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variable:

  ```bash
    cp .env.example .env
  ```

  Replace `your_api_key` with your OpenWeatherMap API key.

  ```env
  OPENWEATHER_API_KEY=your_api_key
  ```
  
### Installation

1. Clone the repository
    ```git
    git clone https://github.com/ismailza/weather-app.git
    ```

2. Navigate to the project directory
    ```bash
    cd weather-app
    ```

3. Build the Docker image
    ```bash
    docker build -t weather-app .
    ```

4. Run the Docker container
    ```bash
    docker run -p 3000:3000 weather-app
    ```
  The `-p 3000:3000` flag maps port 3000 on the host to port 3000 on the container.

The application should now be running in the Docker container.

5. Open your browser and navigate to `http://localhost:3000`

### Development Setup (without Docker)

If you prefer to run the application without Docker, follow these steps:

1. Navigate to the project directory
    ```bash
    cd weather-app
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Start the server
    ```bash
    node app/index.js
    ```

The application should now be running at `http://localhost:3000`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License
This project is licensed under the [MIT License](LICENCE) - see the LICENSE file for details.
