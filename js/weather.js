const API_KEY = "a4f0a56cbb643c2908bb425ee10d5d7a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.querySelector("#weather img");
      const weather = document.querySelector("#weather .weather-temp");
      const city = document.querySelector("#weather .weather-city");
      weatherIcon.classList.remove(HIDDEN_CLASSNAME);
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = `${data.main.temp} ℃`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
