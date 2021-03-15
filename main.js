// Select the elements in the DOM
const tempIcon = document.getElementById("temperatureIcon");
const tempLocation = document.getElementById("temperatureLocation");
const tempDegree = document.getElementById("temperatureDegree");
const tempDescription = document.getElementById("temperatureDescription");
const tempHumidity = document.getElementById("temperatureHumidity");
const tempFeels = document.getElementById("temperatureFeels");

// Add your event listeners
document.getElementById("Btn").addEventListener("click", function () {
  weather.search();
});

// create your functions
