// Create an object that stores all the functions for the Weather API 
let weather = {
  "apiKey": "69ec377536fefde8dd5ef06d398568cb",

  // This anonymous function fetches the information for the UI

  fetchWeather: function(city){
    fetch(
    "http://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey
  )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
  },

  // This anonymous function is responsible for changing the information in the UI
  displayWeather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".icon").src = 
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("temperatureLocation").innerText = name;
    document.querySelector("temperatureDegree").innerText = Math.ceil(temp);
    document.querySelector("temperatureDescription").innerText = description;
  },  
  // This anonymous function runs when the user clicks on the search button
  search: function(){
    this.fetchWeather(document.getElementById("userInput").value)
  }
};

document.querySelector(".card-search .Btn").addEventListener("click", function(){
  weather.search();
});

document.querySelector("userInput").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    weather.search();
  }
});