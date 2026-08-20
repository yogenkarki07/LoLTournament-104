// url = http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
// key = c923a8db6df56f599d6b01b8f7787922

const apiKey = "c923a8db6df56f599d6b01b8f7787922";
const apiURL = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=auckland";



async function getWeather() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        window.mydata = data; // Store the data in a global variable for debugging
        const weather = data.location||[];
        const current = data.current||[];
const container = document.getElementById("weather-container");
console.log("Weather data:", weather);


            container.innerHTML =  `
            <div class="weather-card">
                <h2>${weather.name}, ${weather.country}</h2>
                <p>Temperature: ${current.temperature}°C</p>
                <img src="${current.weather_icons[0]}" alt="Weather Icon">
               
            </div>
        `;

        console.log(weather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();