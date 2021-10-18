// API variables
const apiURL = 'pro.openweathermap.org';
const apiKey = "dd12231eebcfc81237b12aa64539d58d";
// DOM elements
const userFormEl = document.querySelector("#user-form");
const nameInputEl = document.querySelector("#city");

const getWeather = function (cityName) {
  fetch(`${apiURL}/data/2.5/forecast/hourly?q=${cityName}&appid=${apiKey}`)
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

const formSumbitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  const cityName = nameInputEl.value.trim();
  if (cityName) {
    getWeather(cityName);
  } else {
    alert("Please enter a city!");
  }
};
userFormEl.addEventListener("sumbit", formSumbitHandler);
