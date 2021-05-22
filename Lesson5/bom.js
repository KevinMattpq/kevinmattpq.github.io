const input = document.querySelector('#favchap');
const button = document.querySelector('#ready');
const list = document.querySelector('.list');


button.addEventListener('click', () => {
    // all of our code will go here
    let scripture = input.value;
    input.value = "";


    if(scripture == ""){
        scripture = "The input is blank";
    }
    let liElement = document.createElement('li');
    let listScripture = document.createElement('p'); 
    let deleteBtn = document.createElement('button');

    liElement.appendChild(listScripture)
    listScripture.textContent = scripture;
    liElement.appendChild(deleteBtn);
    deleteBtn.textContent = "❌";
    list.appendChild(liElement);

 

 deleteBtn.addEventListener('click', function() {
    // this line of code should use the removeChild() (Links to an external site.) method
    // this line of code should move the cursor back to the input box using the focus (Links to an external site.) method. 
    list.removeChild(liElement);
   
 
  });
  input.focus();
});

  