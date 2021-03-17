// Store API key
const api = {
  apiKey:"69ec377536fefde8dd5ef06d398568cb",
  webUrl: "http://api.openweathermap.org/data/2.5/"
}


const searchCity = document.querySelector('user-input');
searchCity.addEventListener('click', fetchWeather());


// create a function that invokes a search when user presses Enter
function submitSearch(event){
  if(event.keyCode === 13){
    // execute fetchWeather function
    fetchWeather();
  }
}


// create a function that fetches the weather data
function fetchWeather (searchCity){
  fetch(`${api.webUrl}weather?q=${city}&units=metric&appid=${api.apiKey}`)
  .then(weather => {
    return weather.json();
  }).then(displayWeather)
}

function displayWeather(weather){
  console.log(weather);
}





// document.getElementById("Btn").addEventListener("click", function () {
//   weather.search();
// });

// create your functions
 