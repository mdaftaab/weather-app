const apiKey = "e37aeef2c65991fed19d0157ef84f92b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    error.style.display = "block";
    error.innerText = "Invalid city name";
    weather.style.display='none';
  }

  var data = await response.json();
  console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

switch(data.weather[0].main) {
  case "Clouds":
    document.querySelector(".weather-icon").src = "images/clouds.png";
    break;
  case "Clear":
    document.querySelector(".weather-icon").src = "images/clear.png";
    break;
  case "Drizzle":
    document.querySelector(".weather-icon").src = "images/drizzle.png";
    break;
  case "Mist":
    document.querySelector(".weather-icon").src = "images/mist.png";
    break;
  case "Rain":
    document.querySelector(".weather-icon").src = "images/rain.png";
    break;
  case "Snow":
    document.querySelector(".weather-icon").src = "images/snow.png";
    break;
  case "Humidity":
    document.querySelector(".weather-icon").src = "images/humidity.png";
    break;
  case "Wind":
    document.querySelector(".weather-icon").src = "images/wind.png";
    break;
}


};
searchBtn.addEventListener("click",function(event) {
  event.preventDefault();
  if(searchBox.value != ""){
    const city = searchBox.value;
    checkWeather(city);
    error.style.display = "none";
    weather.style.display='block';
  }else{
    error.style.display = "block";
    error.innerText = "Please enter a city name";
  }
});

searchBox.addEventListener("blur",function(event) {
  event.preventDefault();
  weather.style.display='none';
})