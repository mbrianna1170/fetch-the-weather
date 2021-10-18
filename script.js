const userFormEl = document.querySelector("#user-form");
const nameInputEl = document.querySelector("#city");
let cityName = nameInputEl;

const getWeather = function (cityName) {
  const apiKey = c81c7ac769bd1a125a52b9f8cd1cdfa0;
  fetch(
    "api.openweathermap.org/data/2.5/weather?q=" +cityName +"&appid=" +apiKey
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
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
