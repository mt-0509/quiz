'use strict';

{
  // 開始ボタンを押したらスタートする
  document.getElementById('start').addEventListener('click', () => {
          
      // 最初に非同期処理を行う
      function quiz() {
        return new Promise(function (resolve, reject) {
          

        });
      }

      quiz();

    const DATA_URL = 'https://opentdb.com/api.php?amount=10';
    fetch(DATA_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonDATA) {
      var obj = jsonDATA;
      // 回答ボタンを追加(選択肢の数が異なる場合のやり方不明)
      let btn = document.createElement('button');
      document.getElementById('answer-one').appendChild(btn);
      btn.innerHTML = obj.results[1].correct_answer;
      
      // for (objre = 0; objre < 10; ++objre) {
      //   document.getElementById('question').innerHTML = objre[i].question;
      // }
  
      // 取得したデータを表示する
      // 問題文
      document.getElementById('question').innerHTML = obj.results[1].question;
  
      // カテゴリー
      document.getElementById('category').innerHTML = obj.results[1].category;
  
      // 難易度
      document.getElementById('difficulty').innerHTML = obj.results[1].difficulty;
  });




  })

  
}