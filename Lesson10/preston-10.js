const cityid = "5604473";
const APPID = "bad48a2be975656f85b1f4d2c5f385d3";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

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


    // let day = 0;
    // const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //Reduce the list array tp the five forecast...40
    const fiveDayForecast = jsObject.dt_txt;
    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
        let d = new Date(x.dat_txt);
        console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
    });
  });

 