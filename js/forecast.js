//menu icon/button 
const openMenuBtn = document.getElementById("menu");
const sideMenu = document.getElementById("side-menu");
const closeMenuBtn = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

console.log("Attaching lister");

//open menu
openMenuBtn.addEventListener("click", function(){
    
    console.log("Menu clicked");

    sideMenu.classList.add("active");
    overlay.classList.add("active");
})

// close menu using X button
closeMenuBtn.addEventListener("click", function(){

    console.log("Close button clicked");

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
})

//close menu by clicking outside
overlay.addEventListener("click", function(){

    console.log("overlay clicked");

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
})


let cityChoice = document.getElementById('city-choice');
cityChoice.addEventListener('change', function () {
    let selectedCity = cityChoice.value;
    fetchForecast(selectedCity);
});

function fetchForecast(city) {

    const apiKey = 'e0c93a78a72c46e2bde224929260609';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;
    //const url = "./forecast.json"; // Use local JSON file for testing

    console.log('API URL:', url);
    emptyResultsWrapper();
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Forecast data:', data);
            window.debugData = data; // Store data for debugging

            let daysCount = data.forecast.forecastday.length;
            createLocationHeader(data.location);
            createWeatherCard(data.forecast);
        })
        .catch(error => {
            console.error('Error fetching forecast:', error);
        });
}

function emptyResultsWrapper() {
    const container = document.querySelector('.forecasts-wrapper');
    container.replaceChildren();
}

function createLocationHeader(locationData) {
    const container = document.querySelector('.forecasts-wrapper');
    const template = document.getElementById('location-template');
    const clone = template.content.cloneNode(true);
    clone.querySelector(".name").textContent = locationData.name;
    clone.querySelector(".country").textContent = locationData.country;
    container.appendChild(clone);
}

function createWeatherCard(forecastData) {

    const container = document.querySelector('.forecasts-wrapper');
    const template = document.getElementById('forecast-template');
    const daysArray = forecastData.forecastday;

    daysArray.forEach(function (e, i) {
        console.log(e);
        const clone = template.content.cloneNode(true);
        clone.querySelector('.forecast-title').textContent = e.date;
        clone.querySelector('.condition').textContent = e.day.condition["text"];
        clone.querySelector('.max').innerHTML = e.day.maxtemp_c + "&deg;c";
        clone.querySelector('.sunrise').textContent = e.astro.sunrise;
        clone.querySelector('.sunset').textContent = e.astro.sunset;

        container.appendChild(clone);

    });

}
