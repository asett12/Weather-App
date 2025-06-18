import './style.css'

const apiKey = "b39f01a4b3653828f9b641737f6a9bf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weatherIcon img");
const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    const weatherCondition = data.weather[0].main;
    console.log(weatherCondition.src)

    if ( weatherCondition === "Clouds"){
        weatherIcon.src = "/images/cloudy-day.png"
    } else if (weatherCondition === "Clear"){
        weatherIcon.src = "/images/clear-sky.png"
    } else if (weatherCondition === "Rain"){
        weatherIcon.src = "/images/heavy-rain.png"
    } else if (weatherCondition === "Drizzle"){
        weatherIcon.src = "/images/drizzle.png"
    } else if (weatherCondition === "Mist"){
        weatherIcon.src = "/images/fog.png"
    }

    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".humidityPercentage").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

    console.log(data);
};

searchBtn.addEventListener("click", ()=> {
    const cityToSearch = searchBox.value;
    checkWeather(cityToSearch);
});

searchBox.addEventListener("keydown", (event)=>{
    if (event.key === "Enter"){
        const cityToSearch = searchBox.value;
        checkWeather(cityToSearch);
    };
});