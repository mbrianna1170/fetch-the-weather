const getWeather = function () {
  const apiKey = "dd12231eebcfc81237b12aa64539d58d";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=" + apiKey;
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

getWeather();
