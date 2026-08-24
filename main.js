// url = http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
// key = c923a8db6df56f599d6b01b8f7787922

// const apiKey = "c923a8db6df56f599d6b01b8f7787922";
// let userLocation = "New York"; // Replace with the desired location
// const apiURL = "http://api.weatherstack.com/current?access_key=" + apiKey + `&query=${userLocation}`; // Replace 'New York' with the desired location

const apiURL = "./dummy.json"; 

async function getWeather() {
    try{

    //fetch the json file
    const response = await fetch (apiURL);

    //checking if the request was successful
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //convert json response into JavaScript object
    const data = await response.json();

    //get the required information
    const location = data.location;
    const current = data.current;

    //data called from json into HTML
    updatebodysection();



   }

   catch(error){
    console.error("error fetching weather data:", error);
   }

}

function updatebodysection(){
    document.getElementById("city").textContent = `${location.name},${location.country}`;
}


