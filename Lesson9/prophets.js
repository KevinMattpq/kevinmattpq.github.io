const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');
    for (let i = 0; i < prophets.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let cardImage = document.createElement('img');
        let  dateOfBirth = document.createElement('div');
        let  pob = document.createElement('div');
        
        h2.innerHTML = `${prophets[i].name} ${prophets[i].lastname}`;
        dateOfBirth.setAttribute('class', 'dateOfBirth')
    
        dateOfBirth.textContent = `${'Date of Birth: '} ${prophets[i].birthdate}`;
        pob.setAttribute('class', 'pob')
        pob.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        cardImage.setAttribute('src', prophets[i].imageurl);
        cardImage.setAttribute('alt', `Image or Portrait of:   ${prophets[i].name} ${prophets[i].lastname}.`);
        
        card.appendChild(h2);
        card.appendChild(dateOfBirth);
        card.appendChild(pob);
        card.appendChild(cardImage);
        document.querySelector('div.cards').appendChild(card);
    }
  });

  
  image.setAttribute('src', prophets[i].imageurl);