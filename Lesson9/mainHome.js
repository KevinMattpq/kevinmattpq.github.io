const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    const cards = document.querySelector('.cards');
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let subtitle = document.createElement('span');
        let yearFounded = document.createElement('p');
        let cityPopulation = document.createElement('p');
        let annualRainF = document.createElement('p');
        let img = document.createElement('img');
        let div = document.createElement('div');

        h2.textContent = towns[i].name;
        subtitle.textContent = towns[i].motto;
        yearFounded.textContent = `Year Founded: ' ${towns[i].yearFounded}`;
        cityPopulation.textContent = `Population: ' ${towns[i].currentPopulation}`;
        annualRainF.textContent = `Annual Rain Fall:  ${towns[i].averageRainfall}`;
        img.setAttribute('src', 'img/' + towns[i].photo);
        img.setAttribute('alt', `image of: ${towns[i].name}`);
        img.className = 'imgCard'

        div.appendChild(h2);
        div.appendChild(subtitle);
        div.appendChild(yearFounded);
        div.appendChild(cityPopulation);
        div.appendChild(annualRainF);
        card.appendChild(div);
        card.appendChild(img);
        document.querySelector('div.cards').appendChild(card);
    }
  });