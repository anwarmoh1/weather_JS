//init storage class
const storage = new Storage();

//Get store location data
const weatherLocation = storage.getLocationData();


//init weather objec
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  
  //Change location  
  weather.changeLocation(city, country);
  
  // Set location in Local Storage
  storage.setLocationData(city, country);

  //Get and display weather
getWeather();

  // Close modal
  $('#locModal').modal('hide');

});


function getWeather(){
  weather.getWeather()
  .then(results =>{
  ui.paint(results);
    console.log(results);
  })
  .catch(err => console.log(err));

}