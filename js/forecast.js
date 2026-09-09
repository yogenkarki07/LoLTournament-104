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

//serch-bar buttons
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-location");
const clearBtn = document.getElementById("clear-button");

//dropdown-section
const cityDropdown = document.getElementById("city-dropdown");
const cityOptions = document.querySelectorAll(".city-option");
 
// Show city dropdown when input is clicked
searchInput.addEventListener("click", function () {
    cityDropdown.classList.add("active");

    //when the input is empty, all city becomes visible again.
       if (searchInput.value.trim() === "") {
        cityOptions.forEach(function (option) {
            option.style.display = "block";
        });

    }
});

//auto suggestion / complete -- search inoput
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.trim().toLowerCase();
    cityDropdown.classList.add("active");
    cityOptions.forEach(function (option) {
        const cityName = option.textContent.toLowerCase();
        if (cityName.includes(searchValue)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
});

//user selects a city 
cityOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        const selectedCity = option.textContent;
        searchInput.value = selectedCity
        cityDropdown.classList.remove("active");
    });

});

//search button - click event
searchBtn.addEventListener("click", function() {
    //get location from the search input
    const city = searchInput.value.trim();

    //check if the input is empty
    if(city === ""){
        alert("Please enter a city name");
        return;
    }
    cityDropdown.classList.remove("active");
    fetchForecast(city);
});

// search input - enter key event
searchInput.addEventListener("keydown", function(event){
    console.log("Click working")
    if(event.key === "Enter"){
        searchBtn.click();
        console.log("Enter key pressed");
    }
});

//clear button - click event
clearBtn.addEventListener("click", function(){
    //clear the search input
    searchInput.value = "";

    //clear dropdown citylist
    cityDropdown.classList.remove("active");

    //
    cityOptions.forEach(function (option) {
        option.style.display = "block";
    });

    //remove forcast results
    emptyResultsWrapper();

    //put the cursor back to the search box
    searchInput.focus();
});

//api key
const apiKey = 'e0c93a78a72c46e2bde224929260609';

// let cityChoice = document.getElementById('city-dropdown');
// cityChoice.addEventListener('change', function () {
//     let selectedCity = cityChoice.value;
//     fetchForecast(selectedCity);
// });

function fetchForecast(city) {

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

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
    clone.querySelector(".city").textContent = locationData.name;
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
   
        clone.querySelector('.icon').innerHTML = `<img src="https:${e.day.condition.icon}" alt="${e.day.condition.text}">`;
        
        clone.querySelector('.temperature').innerHTML = e.day.maxtemp_c + "&deg;c";
        clone.querySelector('.sunrise').textContent = e.astro.sunrise;
        clone.querySelector('.sunset').textContent = e.astro.sunset;

        container.appendChild(clone);

    });

}
