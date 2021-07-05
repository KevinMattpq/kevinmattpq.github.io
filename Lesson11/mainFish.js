const cityid = "5585010";
const APPID = "bad48a2be975656f85b1f4d2c5f385d3";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;
// const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemperature = document.querySelector("#currentTemperature");
    currentTemperature.textContent = jsObject.main.temp.toFixed(0);
    const maxTemp = document.querySelector("#max");
    maxTemp.textContent = jsObject.main.temp_max.toFixed(0);
    const minTemp = document.querySelector('#min');
    minTemp.textContent = jsObject.main.temp_min.toFixed(0);
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;



  });