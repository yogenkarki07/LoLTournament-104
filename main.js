// url = http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
// key = c923a8db6df56f599d6b01b8f7787922

// const apiKey = "c923a8db6df56f599d6b01b8f7787922";
// let userLocation = "New York"; // Replace with the desired location
// const apiURL = "http://api.weatherstack.com/current?access_key=" + apiKey + `&query=${userLocation}`; // Replace 'New York' with the desired location

const apiURL = "./dummy.json"; 

async function Weather() {
    try{

    //fetch the json file
    const response = await fetch (apiURL);

    //checking if the request was successful
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //convert json/API response into JavaScript object
    const data = await response.json();

    //data calling from API/json into HTML
    updatingHomeUI(data);

    //data calling from API into grid-boxes elements
    homeGrid(data);

   }

   catch(error){
    console.error("error fetching weather data:", error);
   }

}

//home UI function
function updatingHomeUI(data){
    //get the required information from AIP/json
    const location = data.location;
    const current = data.current;

    // window.mytime = location; <super class="super">&deg;c</super>

    //creting variables -- for HTML elements
    const cityElement = document.getElementById("city");
    const timeElement = document.getElementById("time");
    const iconElement = document.getElementById("icon");
    const tempElement = document.getElementById("temperature");
    const descripElement = document.getElementById("description");

    //putting API data into HTML elements
    cityElement.textContent = `${location.name}`;
    timeElement.textContent = `${location.localtime.split(" ")[1]}`;    //split date and kept only time
    iconElement.innerHTML = `<img src="${current.weather_icons[0]}" alt="${current.weather_descriptions[0]}">`;
    tempElement.innerHTML = `${current.temperature}°C`;
    descripElement.textContent = `${current.weather_descriptions[0]}`;

}

//Home-Grid function
function homeGrid(data){
    //get the required information from AIP/json
    const current = data.current;

    //creating variables -- for HTML elements
    const humiElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    const visiElement = document.getElementById("visibility");
    const presElement = document.getElementById("pressure");

    //loading API data into HTML elements
    humiElement.textContent = `${current.humidity} %`;
    windElement.textContent = `${current.wind_speed} km/h`;
    visiElement.textContent = `${current.visibility} km`;
    presElement.textContent = `${current.pressure} hPa`;

}

Weather();