'use strict';

{
<<<<<<< HEAD
  // 外部APIを呼び出す
  var request = new XMLHttpRequest();
  request.open('GET', 'https://opentdb.com/api.php?amount=10', true);
  request.responseType = 'text';

  // レスポンスが帰って来たときの処理
  request.onload = function () {
    var data = this.response;
    
    // documentに表示する 
    document.getElementById('problem').innerHTML = data;
  };

  request.send();
=======
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

  
  
>>>>>>> sub1
}