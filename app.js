const apiKey = '3ff1b90e5c4ea09d3f060c529b255426';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city=>{
    const url = `${apiBase}?q=${city}&appid=${apiKey} `;
    fetch(url)
    .then(res => res.json())
    .then(data => updateUI(data))
}


const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', ()=>{
    const inputCity = document.getElementById('input-city').value;
    getWeatherData(inputCity);
})



const updateUI = data =>{
   document.getElementById('city-name').innerText = 'City name :' + (data.name || "Unknown Location");
   document.getElementById('city-temp').innerText = 'Temperatue :' + (data.main.temp);
   document.getElementById('city-desc').innerText = 'Decription :' + (data.weather[0].description);
   document.getElementById('icon').innerText = data.weather[0].icon;
   document.getElementById('humidity').innerText = 'Humidity : ' + (data.main.humidity);
   document.getElementById('input-city').value = " ";
}
// getWeatherData('Dhaka');