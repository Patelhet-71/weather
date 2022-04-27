// api.openweathermap.org/data/2.5/weather?q={city name}&appid={api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.getElementById("bg-img").src = 'images/clean.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#B2C3D3";
        document.getElementById("input-box").style.backgroundColor = "#E9EFF5";
        document.getElementById("details-box").style.backgroundColor = "#E9EFF5";
       
    } else if(weatherType.textContent == 'Clouds') {
        document.getElementById("bg-img").src = 'images/cloudy.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#B29B81";
        document.getElementById("input-box").style.backgroundColor = "#F0E3D2";
        document.getElementById("details-box").style.backgroundColor = "#F0E3D2";

    } else if(weatherType.textContent == 'Sunny') {
        document.getElementById("bg-img").src = 'images/sunny.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#C9AFCA";
        document.getElementById("input-box").style.backgroundColor = "#FFD8DA";
        document.getElementById("details-box").style.backgroundColor = "#FFD8DA";

    } else if(weatherType.textContent == 'Haze') {
        document.getElementById("bg-img").src = 'images/haze.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#A58998";
        document.getElementById("input-box").style.backgroundColor = "#F5F2F3";
        document.getElementById("details-box").style.backgroundColor = "#F5F2F3";

    } else if(weatherType.textContent == 'Rain') {
        
        document.getElementById("bg-img").src = 'images/rain.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#CDD4D5";
        document.getElementById("input-box").style.backgroundColor = "#F7FAFC";
        document.getElementById("details-box").style.backgroundColor = "#F7FAFC";
        
    } else if(weatherType.textContent == 'Snow') {
        document.getElementById("bg-img").src = 'images/snow.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#999996";
        document.getElementById("input-box").style.backgroundColor = "#EDECEC";
        document.getElementById("details-box").style.backgroundColor = "#EDECEC";

    } else if(weatherType.textContent == 'Thunderstorm') {
        document.getElementById("bg-img").src = 'images/Thunderstorm.jpg';
        document.getElementById("bg-img").style.opacity = '0.4';
        document.getElementById("bg-color").style.backgroundColor = "#C7BAC6";
        document.getElementById("input-box").style.backgroundColor = "#F4EBF3";
        document.getElementById("details-box").style.backgroundColor = "#F4EBF3";
    } 
}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



