'use strict';

{
  // 外部APIを呼び出す
  var request = new XMLHttpRequest();
  request.open('GET', 'https://opentdb.com/api.php?amount=10', true);
  request.responseType = 'json';

  // レスポンスが帰って来たときの処理
  request.onload = function () {
    var data = this.response;
    
    // documentに表示する 3/17表示の仕方が不明
    document.getElementById('problem').innerHTML = data;
  };

  request.send();
}