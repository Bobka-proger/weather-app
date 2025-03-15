const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&units=metric&lang=ru&appid=0e5ceefe1b8038f58348f443896ad4c7"

let weatherInfo = document.querySelector("#weatherInfo")

async function getWeather() {
    const resp = await fetch(API_WEATHER)
    const respToJSON = await resp.json()
    let {temp} = respToJSON.main
    let {description, icon} = respToJSON.weather[0] 
    weatherInfo.innerHTML = `
    <img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}@4x.png"
    <p class="temperature">температура: ${Math.round(temp)}°</p>
    <p class="description">температура: ${description}°</p>
    `
}
getWeather()