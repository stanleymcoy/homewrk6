const api = {
    key: "aeb395ac1a6a2d4087ef7fc3c8ebd4fb",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        getResult(searchbox.value);
    }
}

function getResult(query) {
    fetch(`${api.base}weather?q=${query}&units=Imperial&APPID=${key}`)
        .then(weather => {
        return weather.json();
    })  .then(displayResult);
}

function displayResult(weather) {
    console.log(weather);
    let city = document.querySelect('.location .city');
    city.innerText = `${weather.name},${weather.icon}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span> F</span>`;

    let weatherEl = document.querySelector('.current .weather');
    weatherEl.innerText = weather.weather[0].main;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`;
}