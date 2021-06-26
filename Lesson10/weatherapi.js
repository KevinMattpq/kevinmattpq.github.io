const cityid = "5604473";
const APPID = "bad48a2be975656f85b1f4d2c5f385d3";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    currently.innerHTML = `<strong>${jsObject.weather[0].description.toUppercase()}</strong>`;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
     document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
     document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
     document.getElementById('icon').setAttribute('alt', desc.toUppercase());

  });