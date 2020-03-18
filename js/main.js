'use strict';

{

  const DATA_URL = 'https://opentdb.com/api.php?amount=10';
  fetch(DATA_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonDATA) {
    const json = {jsonDATA};
    const obj = JSON.parse(json);
    

    console.log(obj.length);
    
    

  })

  
}