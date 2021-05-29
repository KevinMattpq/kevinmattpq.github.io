


function wchill(tempeture, windSpeed){

    if (tempeture <= 50 && windSpeed > 3){
        
        let result;
        result =  Math.round(35.74 + 0.6214*tempeture - 35.75*windSpeed**0.16 + 0.4275 * tempeture * windSpeed**0.16);
        document.getElementById('windchillValue').innerHTML = result+'%';
         console.log(result);
    }else{
        result='N/A';
        document.getElementById('windchillValue').innerHTML = result;
    }
   
}


wchill(35, 15);