const cityidi = "3981609";
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial'

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let nList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

    for(let i = 0; i <=4 ;i ++ ){
        let d = new Date(nList[i].dt_txt);
        document.getElementById(`day${i+1}`).textContent =  dayofweek[d.getDay()];
        document.getElementById(`dayTemp${i+1}`).textContent = nList[i].main.temp.toFixed(0);

        const imgalt = nList[i].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + nList[i].weather[0].icon + '@2x.png';
        document.getElementById(`icon${i+1}`).setAttribute('src',imagesrc);
        document.getElementById(`icon${i+1}`).setAttribute('alt', imgalt);
    }


  });