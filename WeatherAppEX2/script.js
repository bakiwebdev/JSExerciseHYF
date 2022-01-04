//Open Weather map Api
const apiKey = "Your API Key";

// Create input element to insert city name
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter city name";
input.id = "city";

// Create button element to search for city weather
const button = document.createElement("button");
button.id = "search";
button.textContent = "Search";

button.addEventListener("click", () => getWeather(input.value));
window.onload = () => {
  // Add input and button to html page
  document.body.appendChild(input);
  document.body.appendChild(button);
};

// just test for location permission
const displayUserPosition = navigator.geolocation.getCurrentPosition(function (
  position
) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  getCurrentLocationWeather(lat, long);
});

// Get current user location weather
const getCurrentLocationWeather = (lat, long) => {
  displayLoading(true);
  // 1. create url to fetch
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  // 2. Create axios get request
  axios
    .get(url)
    .then(function (response) {
      // 3. Display weather data on html page
        displayText(`The Temperature in ${response.data.name} is ${response.data.main.temp}`);
        displayText(`The Humidity in ${response.data.name} is ${response.data.main.humidity}`);
        displayText(`The Pressure in ${response.data.name} is ${response.data.main.pressure}`);
    })
    .catch(function (error) {
      displayErrorMessage("Something went wrong " + error.message);
    })
    .then(function () {
      // 4. Remove loading animation
      displayLoading(false);
    });
};

// Create function to display text data on html page
const displayText = (data) => {
  const p = document.createElement("p");
  p.innerText = data;
  document.body.appendChild(p);
};

const displayLoading = (show) => {
  if (show) {
    const p = document.createElement("p");
    p.id = "loading";
    p.innerText = "Loading...";
    document.body.appendChild(p);
  } else {
    document.getElementById("loading").remove();
  }
};

const displayErrorMessage = (message) => {
  const p = document.createElement("p");
  p.innerText = message;
  p.style.color = "red";
  document.body.appendChild(p);
  setTimeout(() => {
    p.remove();
  }, 3000);
};

// Create function to call api and display weather data
const getWeather = (city) => {
  displayLoading(true);
  // 1. create url to fetch
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // 2. Create axios get request
  axios
    .get(url)
    .then(function (response) {
      // 3. Display weather data on html page
      displayText(
        `The Temperature in ${input.value} is ${response.data.main.temp}`
      );
      displayText(
        `The Humidity in ${input.value} is ${response.data.main.humidity}`
      );
      displayText(
        `The Pressure in ${input.value} is ${response.data.main.pressure}`
      );
    })
    .catch(function (error) {
      displayErrorMessage("Something went wrong " + error.message);
    })
    .then(function () {
      // 4. Remove loading animation
      displayLoading(false);
    });
};
