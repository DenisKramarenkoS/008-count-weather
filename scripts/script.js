'use strict';
const degrees = document.getElementsByClassName('degrees');
const weatherInfo = document.getElementsByClassName('weather__info__mode');
fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.30&lon=5.37&units=metric&appid=09fb599dd2980efff0d48342ac50f502')
    .then((res) => res.json())
    .then((data) => {
    degrees[0].textContent = data.main.temp;
    weatherInfo[0].textContent = data.weather[0].main;
});
fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.89&lon=12.48&units=metric&appid=09fb599dd2980efff0d48342ac50f502')
    .then((res) => res.json())
    .then((data) => {
    degrees[1].textContent = data.main.temp;
    weatherInfo[1].textContent = data.weather[0].main;
});
fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.33&lon=10.31&units=metric&appid=09fb599dd2980efff0d48342ac50f502')
    .then((res) => res.json())
    .then((data) => {
    degrees[2].textContent = data.main.temp;
    weatherInfo[2].textContent = data.weather[0].main;
});
