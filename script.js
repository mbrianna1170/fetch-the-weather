var getWeather = function(city) {
  // format api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=dd12231eebcfc81237b12aa64539d58d";

  // fetch api
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

getWeather("Austin");