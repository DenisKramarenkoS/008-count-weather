fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.13&lon=131.91&units=metric&appid=09fb599dd2980efff0d48342ac50f502').then(res => res.json()).then(data => console.log(data.main.temp));
