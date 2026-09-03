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

// const apiKey = "c923a8db6df56f599d6b01b8f7787922";
// let userLocation = "New York"; // Replace with the desired location
// const apiURL = "http://api.weatherstack.com/current?access_key=" + apiKey + `&query=${userLocation}`; // Replace 'New York' with the desired location

const apiURL = "./dummy.json";

async function Weather() {
    try{

        //fetch the json/api file
        const response = await fetch(apiURL);

        //check if the response is ok
        if(!response.ok){
            throw new Error(`HTTP error! status : ${response.status}`);
        }

        //convert the response to JSON
        const data = await response.json();

        //call the function to display the weather data of auckland
        AucklandWeather(data);

        //call the function to display the weather data of christchurch
        ChristchurchWeather(data);

        //call the function to display the weather data of wellington
        WellingtonWeather(data);

    } catch(error){
        console.error("Error fetching weather data:", error);
    }
}

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

Weather();