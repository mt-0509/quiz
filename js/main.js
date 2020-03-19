'use strict';

{
  const DATA_URL = 'https://opentdb.com/api.php?amount=10';
  fetch(DATA_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonDATA) {
    var obj = jsonDATA;
    // オブジェクトを取り出す
    console.log(obj.results[1]);
  })

  
  
}