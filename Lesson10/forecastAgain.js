// const cityid = "5604473";
// const APPID = "bad48a2be975656f85b1f4d2c5f385d3";
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);


//     const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     let nList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

//     for(let day = 0; day <=4 ;day ++ ){
//         let d = new Date(nList[day].dt_txt);
//         document.getElementById(`dayName${day+1}`).textContent = dayofweek[d.getDay()];
//         document.getElementById(`dayTemp${day+1}`).textContent = nList[day].main.temp;

//         const imgalt = nList[day].weather[0].description;
//         const imagesrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
//         document.getElementById(`icon${day+1}`).setAttribute('src',imagesrc);
//         document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
//     }


//   });
