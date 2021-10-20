// For Search Form
var searchformEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city");
// For Weather Container
var weatherContainerEl = document.querySelector("#weather-container");
var cityName = document.querySelector("#city-name");
var cityTemperature = document.querySelector("#temperature");
var cityWind = document.querySelector("#wind");
var cityHumidity = document.querySelector("#humidity");
var currentDate = document.querySelector("#current-date");

// Fetch Weather Information
var getWeather = function (city) {
  // format api url
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/find?q=" +
    city +
    "&units=imperial&appid=dd12231eebcfc81237b12aa64539d58d";

  // fetch api
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      displayWeather(data);
    });
  });
};

// FormSumbitHandler
var formSubmitHandler = function (event) {
  event.preventDefault();
  // get value from input element
  var city = cityInputEl.value.trim();

  if (city) {
    getWeather(city);
    cityInputEl.value = "";
  } else {
    alert("Please enter the name of a city.");
  }
  console.log(event);
};

// Display Current Weather On Page
var displayWeather = function (data) {
  console.log(data);
  cityName.textContent = data.list[0].name;
  cityTemperature.textContent = data.list[0].main.temp + "\xB0" + "F";
  cityWind.textContent = data.list[0].wind.speed + " MPH";
  cityHumidity.textContent = data.list[0].main.humidity + "%";
  // display date
  var today = moment().format("MM/DD/YY");
  currentDate.textContent = today;
};

searchformEl.addEventListener("submit", formSubmitHandler);
