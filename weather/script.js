const appId = "82cacb701dcdb106427a41a16f29f132";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const respose = await fetch(URL + city + `&appid=${appId}`);

    if (respose.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".content").style.display = "none";
    }else{
        let data = await respose.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "c4.jpg";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.jpg";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".content").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

