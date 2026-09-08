
const apiKey = "11f4c02fd9934fb1a26222549260709";

async function Weather(cityName) {
    try{

    const apiURL = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + `&q=${cityName}` + ` &days=1` +`&aqi=no`+`&alerts=n`;
    //fetch the json/api file
    const response = await fetch (apiURL);

    //checking if the request was successful
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //convert json/API response into JavaScript object
    const data = await response.json();

    window.myData = data;

    //data calling from API/json into HTML
    updatingHomeUI(data);

    //data calling from API into grid-boxes elements
    homeGrid(data);

    //displayHourlyData --
    displayHourlyForecastWeatherInfo(data);

   }

   catch(error){
    console.log("error fetching weather data:");
    alert("error fetching weather data:");

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
    iconElement.innerHTML = `<img src="https:${current.condition.icon}" alt="${current.condition.text}">`;
    tempElement.innerHTML = `${current.temp_c}°`;
    descripElement.textContent = `${current.condition.text}`;

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
    windElement.textContent = `${current.wind_kph} km/h`;
    visiElement.textContent = `${current.vis_km} km`;
    presElement.textContent = `${current.pressure_mb} hPa`;

}

//displayHourlyForecastWeatherInfo
function displayHourlyForecastWeatherInfo(data){
    //select forecast-box
    const forecastBox = document.querySelector(".forecast-box");

    //get hourly forecaste data from api
    const hourlyData = data.forecast.forecastday[0].hour;

    //get current hour from the API location
    const currentHour = new Date(data.location.localtime).getHours();

    //find current hour
    const currentIndex = hourlyData.findIndex(hour => {
        const hourTime = new Date(hour.time).getHours();
        return hourTime === currentHour;
    });

    // if current hour is not found
    if (currentIndex === -1){
        console.log("current hour not found");
        return;
    }

    //get current hour + next 7 hours

    const nextHours = hourlyData.slice(currentIndex, currentIndex + 8);

    // remove old forecast info
    forecastBox.innerHTML = "";

    // create each hourly forecaste
    nextHours.forEach((hour, index) => {

        // create forecast card
        const forecastInfo = document.createElement("div");
        forecastInfo.classList.add("forecast-info");

        //create time
        const time = document.createElement("div");
        time.classList.add("time");

        // first card represents -- current weather (now)
        if (index === 0){
            time.textContent = "Now";
        }else{
            const hourDate = new Date(hour.time);
            time.textContent = hourDate.toLocaleTimeString("en-US",
                {
                    hour: "numeric",
                    hour12: true
                }
            );
        }

        //create icon-container
        const icon = document.createElement("div");
        icon.classList.add("icon");

        //create actual img
         const image = document.createElement("img");
         image.src = `https:${hour.condition.icon}`;
         image.alt = hour.condition.text;
         //put image into container
         icon.appendChild(image);

         //create temperature
         const temperature = document.createElement("div");
         temperature.classList.add("temperature");
         temperature.textContent = `${Math.round(hour.temp_c)}°`;

         //add everything to card
         forecastInfo.appendChild(time);
         forecastInfo.appendChild(icon);
         forecastInfo.appendChild(temperature);

         //add card to forecaste-box
         forecastBox.appendChild(forecastInfo);
    });
}

Weather("Auckland");



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