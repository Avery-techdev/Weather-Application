function formatDate(date) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondotion(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

function searchCity(city) {
  let apiKey = "298146983df1f6435467782acb139467";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayWeatherCondotion);
}
  
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
  }

function searchLocation(position) {
  let apiKey = "298146983df1f6435467782acb139467";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayWeatherCondotion);
  
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

function convertCelsiustoFahrenheit(event) {
  event.preventDefault();
  let getCelsius = document.querySelector("#temperature");
  let celsius = getCelsius.innerHTML;
  getCelsius.innerHTML = 66;
}

function getCelsiusBack(event) {
  event.preventDefault();
  let getCelsius = document.querySelector("#temperature");
  getCelsius.innerHTML = 2;
}

let now = new Date();
let currentDate = document.querySelector("h3");
currentDate.innerHTML = formatDate(currentDate);

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");


