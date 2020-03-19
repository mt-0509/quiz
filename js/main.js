'use strict';

{
  const DATA_URL = 'https://opentdb.com/api.php?amount=10';
  fetch(DATA_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonDATA) {
    var obj = jsonDATA;
    // オブジェクトの取り出し方が不明
    console.log(response.results[0].category);
  })
  
}