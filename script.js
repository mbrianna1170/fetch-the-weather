// variables
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");

var getWeather = function (city) {
  // format api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=dd12231eebcfc81237b12aa64539d58d";

  // fetch api
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

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

cityFormEl.addEventListener("submit", formSubmitHandler);