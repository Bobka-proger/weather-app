
let weatherInfo = document.querySelector("#weatherInfo")

async function getWeather(lat, lon) {
    const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=0e5ceefe1b8038f58348f443896ad4c7`
    const resp = await fetch(API_WEATHER)
    const respToJSON = await resp.json()
    let name = respToJSON.name
    let {temp} = respToJSON.main
    let {description, icon} = respToJSON.weather[0]
    let h1 = document.querySelector("h1")
    weatherInfo.innerHTML = `
    <h1 class="text-center my-5">погода in ${name}</h1>
    <img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}@4x.png">
    <p class="temperature">${Math.round(temp)}°</p>
    <p class="description">${description}</p>

    `
    let body = document.body

    switch (description) {
        case "ясно":
            body.classList = "clear"
            break;
        case "пасмурно":
            body.classList = "cloudy"
            break;
        case "дождь":
            body.classList = "rain"
            break;
        case "снег":
            body.classList = "snow"
            break;
        case "туман":
            body.classList = "fog"
            break;
        case "гроза":
            body.classList = "storm"
            break;
        default:
            body.classList = "windy"
            break;
    }
}

function getlocation () {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeather(lat, lon)
        }
    )
}

getlocation()
