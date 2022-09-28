const API_KEY = `7786e5648d7b4992eff665ed4e5b77a0`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h4> City Not Found <h4>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h6>-> Temperature :${data.main.temp} ℃</h6>
            <h6>-> ${data.weather[0].main} </h6>
            <h6>-> Humidity :${data.main.humidity} % </h6>
            <h6>-> Wind Speed :${data.wind.speed} km/h </h6>
        </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)







