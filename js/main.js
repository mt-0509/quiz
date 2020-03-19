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

    // 取得したデータを表示する
    // 問題文
    document.getElementById('question').innerHTML = obj.results[1].question;

    // カテゴリー
    document.getElementById('category').innerHTML = obj.results[1].category;

    // 難易度
    document.getElementById('difficulty').innerHTML = obj.results[1].difficulty;


  })

  
}