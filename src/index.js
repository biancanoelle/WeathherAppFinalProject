let h2 = document.querySelector("h2");

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showWeather);
}

let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", search);

function showWeather(response) {
  let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  console.log(response);
  h3.innerHTML = `${temperature}°F  ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

function displayForecast(forecast) {
  let forecastElement = document.querySelector("#forecast");
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "imperial";
  let url =
    "https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&appid={apiKey}&units=${units}";
  forecastElement.innerHTML = "Forecast";
}
