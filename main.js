// Store API key within an API object
const api = {
  apiKey:"69ec377536fefde8dd5ef06d398568cb",
  webUrl: "http://api.openweathermap.org/data/2.5/"
}

const inputValue = document.querySelector('.user-input .card-search .btn');
inputValue.addEventListener("click", submitSearch);

// create a function that invokes a search when user presses Enter
function submitSearch(event){
  if(event.keyCode == 13) {
    getWeather(inputValue.value);
  }
}

// create a function that fetches the weather data
function getWeather(city){
  fetch(`${api.webUrl}weather?q=${city}&units=metric&appid=${api.apiKey}`)
  .then(weather => {
    return weather.json();
  }).then(displayWeather);
}

function displayWeather(weather){
  let city = document.querySelector(".temperature__location .card-search .btn")
  cityValue.innerText = `${weather.name}`;
}

// document.querySelector(".card-search .Btn").addEventListener("click", function(){
//   weather.search();
// });