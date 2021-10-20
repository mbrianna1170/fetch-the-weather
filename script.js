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
// For Weather Card
var weatherCardEl = document.querySelector("#weather-card");
var temperatureOne = document.querySelector("#temp1")
var temperatureTwo = document.querySelector("#temp2")
var temperatureThree = document.querySelector("#temp3")
var temperatureFour = document.querySelector("#temp4")

var windOne = document.querySelector("#wind1");
var windTwo = document.querySelector("#wind2");
var windThree = document.querySelector("#wind3");
var windFour = document.querySelector("#wind4");

var humidityOne = document.querySelector("#humidity1")
var humidityTwo = document.querySelector("#humidity2")
var humidityThree = document.querySelector("#humidity3")
var humidityFour = document.querySelector("#humidity4")


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
  // 4 remaining days temp
  temperatureOne.textContent = data.list[1].main.temp + "\xB0" + "F";
  temperatureTwo.textContent = data.list[2].main.temp + "\xB0" + "F";
  temperatureThree.textContent = data.list[3].main.temp + "\xB0" + "F";
  temperatureFour.textContent = data.list[4].main.temp + "\xB0" + "F";
  // 4 remaining days wind
  windOne.textContent = data.list[1].wind.speed + " MPH";
  windTwo.textContent = data.list[2].wind.speed + " MPH";
  windThree.textContent = data.list[3].wind.speed + " MPH";
  windFour.textContent = data.list[4].wind.speed + " MPH";
  // 4 remaining days humidity 
  humidityOne.textContent = data.list[0].main.humidity + "%";
  humidityTwo.textContent = data.list[0].main.humidity + "%";
  humidityThree.textContent = data.list[0].main.humidity + "%";
  humidityFour.textContent = data.list[0].main.humidity + "%";
};

searchformEl.addEventListener("submit", formSubmitHandler);
