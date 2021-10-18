// API variables
const apiURL = 'pro.openweathermap.org';
const apiKey = "dd12231eebcfc81237b12aa64539d58d";
// DOM elements
let searchFormEl = document.querySelector("#search-form");
let cityInputEl = document.querySelector("#city-input");
let cityNameEl = document.querySelector("#city-name");
let cityName = cityNameEl;
// Other
let searchHistoryArray = [];

// fetch api getWeather(); 
const getWeather = function (city) {
  fetch(`${apiURL}/data/2.5/forecast/hourly?q=${cityName}n&appid=${apiKey}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayWeather(data, city);
        });
      } else {
        alert("Error: City Not Found")
      }
    });
};

// displayWeather();
const displayWeather = function (data) {
  cityNameEl.textContent = "Showing weather for " + data.list[0].name;
}

// Form Sumbit Handler
const formSumbitHandler = function (event) {
  event.preventDefault();
  const cityName = cityInputEl.value.trim();
  if (cityName) {
    getWeather(cityName);
    searchHistoryArray.unshift(cityName);
    localStorage.setItem("city", JSON.stringify(searchHistoryArray));
    createButton();
    cityInputEl.value = "";
  } else {
    alert("Please enter a valid city.");
  }
};

searchFormEl.addEventListener("sumbit", formSumbitHandler);
