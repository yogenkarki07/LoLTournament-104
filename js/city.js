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


// city-list -- city-card function

const apiKey = "11f4c02fd9934fb1a26222549260709";
// let userLocation = "New York"; // Replace with the desired location
//let apiURL = "http://api.weatherstack.com/current?access_key=" + apiKey + `&query=${userLocation}`; // Replace 'New York' with the desired location

async function Weather(cityName, fn) {
    try{
                                              
        //fetch the json/api file
        const apiURL = "http://api.weeatherapi.com/current?access_key=" + apiKey + `&query=${cityName}`; 
         
        const response = await fetch("./dummy.json");
        // const response = await fetch(apiURL);

        //check if the response is ok
        if(!response.ok){
            throw new Error(`HTTP error! status : ${response.status}`);
        }

        //convert the response to JSON
        const data = await response.json();

        // dynamically callback the function based on the city name
        window[fn](data);

    } catch(error){
        console.error("Error fetching weather data:", error);
    }
}

setTimeout(() => {
  Weather("Auckland", "AucklandWeather");
}, 500);

setTimeout(() => {
  Weather("Christchurch", "ChristchurchWeather");
}, 1000);

setTimeout(() => {
  Weather("Wellington", "WellingtonWeather");
}, 1500);


//Auckland weather function
function AucklandWeather(data){
    //get the required information from API/json
    const location = data.location;
    const current = data.current;

    //creating variables for HTML elements
    const cityElement = document.getElementById("city-auck");
    const timeElement = document.getElementById("time-auck");
    const tempElement = document.getElementById("temperature-auck");
    const descripElement = document.getElementById("description-auck");
    const feelslikeElement = document.getElementById("humidity-auck");

    //putting API data into HTML elements
    cityElement.textContent = `${location.name}`;
    timeElement.textContent = `${location.localtime.split(" ")[1]}`;   //split date and kept only time
    tempElement.textContent = `${current.temperature}°C`;
    descripElement.textContent = `${current.weather_descriptions[0]}`;
    feelslikeElement.textContent = `Humidity: ${current.humidity}%`;
}

//Christchurch weather function
function ChristchurchWeather(data){
    //get the required information from API/json
    const location = data.location;
    const current = data.current;

    //creating variables for HTML elements
    const cityElement = document.getElementById("city-christ");
    const timeElement = document.getElementById("time-christ");
    const tempElement = document.getElementById("temperature-christ");
    const descripElement = document.getElementById("description-christ");
    const feelslikeElement = document.getElementById("humidity-christ");

    //putting API data into HTML elements
    cityElement.textContent = `${location.name}`;
    timeElement.textContent = `${location.localtime.split(" ")[1]}`;   //split date and kept only time
    tempElement.textContent = `${current.temperature}°C`;
    descripElement.textContent = `${current.weather_descriptions[0]}`;
    feelslikeElement.textContent = `Humidity: ${current.humidity}%`;
}

//Wellington weather function
function WellingtonWeather(data){
    //get the required information from API/json
    const location = data.location;
    const current = data.current;

    //creating variables for HTML elements
    const cityElement = document.getElementById("city-well");
    const timeElement = document.getElementById("time-well");
    const tempElement = document.getElementById("temperature-well");
    const descripElement = document.getElementById("description-well");
    const feelslikeElement = document.getElementById("humidity-well");

    //putting API data into HTML elements
    cityElement.textContent = `${location.name}`;
    timeElement.textContent = `${location.localtime.split(" ")[1]}`;   //split date and kept only time
    tempElement.textContent = `${current.temperature}°C`;
    descripElement.textContent = `${current.weather_descriptions[0]}`;
    feelslikeElement.textContent = `Humidity: ${current.humidity}%`;
}


// searching the city/location and displaying the weather data

//serch-bar buttons
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-location");
const clearBtn = document.getElementById("clear-btn");

//weather sections
const cityList = document.querySelector(".city-list");

//for search location
const searchedWeather = document.getElementById("display-searched-weather");

//hiding the searched weather section initially
searchedWeather.style.display = "none";




//search button - click event
searchBtn.addEventListener("click", function() {
    //get location from the search input
    const cityName = searchInput.value.trim();

    //check if the input is empty
    if(cityName === ""){
        alert("Please enter a city name");
        return;
    }

    searchWeather(cityName);
});

//search input - enter key event
searchInput.addEventListner("keypress", function(event){
    if(event.key === "Enter"){
        searchBtn.click();
        console.log("Enter key pressed");
    }
});

//main--weather function

async function searchWeather(cityName) {
    try{
        const apiURL = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + `&q=${cityName}&aqi=no`;

        // const apiURL = "http://api.weatherapi.com/v1/current.json?key=11f4c02fd9934fb1a26222549260709&q=London&aqi=no";

        //send rerquest to the API
        const response = await fetch(apiURL);

        //checking if the request is successfull
        if(!response.ok){
            throw  new error(`HTTP error! status: ${response.status}`);
        }

        //convert the response to JSON
        const data = await response.json();

        //display the weather data 
        displaySearchedWeather(data);

    } catch(error) {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data of this location. Please try again later.");
    }
};

function displaySearchedWeather(data) {
    //get the required information from API/json
    const location = data.location;
    const current = data.current;

    // hide the city-list section 
    cityList.style.display = "none";

    //show the searched weather section
    searchedWeather.style.display = "block";

    //creating variables for HTML elements
    const cityElement = document.getElementById("city");
    const tempElement = document.getElementById("temperature");
    const descripElement = document.getElementById("description");

    //putting API data into HTML elements
    cityElement.textContent = `${location.name}`;
    tempElement.textContent = `${current.temperature}°`;
    descripElement.textContent = `${current.weather_descriptions[0]}`;  

};

//clear button - click event
clearBtn.addEventListener("click", function(){
    //clear the search input
    searchInput.value = "";

    //hide the searched weather section
    searchedWeather.style.display = "none";

    //show the city-list section / default three cities
    cityList.style.display = "block";

    //put the cursor back to the search box
    searchInput.focus();
});