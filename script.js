
const apiKey = '3ff1b90e5c4ea09d3f060c529b255426';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city =>{
    fetch(`${apiBase}?q=${city}&appid=${apiKey}`)
.then(res => res.json())
.then(data => updateUI(data))
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const inputCity = document.getElementById('input-city').value ;
    getWeatherData(inputCity);
})


const updateUI = data =>{
    document.getElementById('input-city').value = "";
 const weatherInfo = document.getElementById('weather-info');
 weatherInfo.innerHTML = `
 <h2> City Name : ${data.name} </h2>
 <h3> Temperatue : ${data.main.temp}</h3>
 <p> ${data.weather[0].description}</p>
 `
}

// getWeatherData('dhaka');