// For Weather Card
var weatherCardEl = document.querySelector("#weather-card");
var temperatureOne = document.querySelector("#temp1")

// Display Current Weather On Page
var displayWeather = function (data) {
  console.log(data);
  temperatureOne.textContent = data.list[1].main.temp + "\xB0" + "F";
};

