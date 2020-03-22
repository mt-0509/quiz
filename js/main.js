'use strict';

{
  // 開始ボタンを押したらスタートする
  document.getElementById('start').addEventListener('click', () => {
    document.getElementById('question').innerHTML = '少々お待ちください';
          
      // 最初に非同期処理を行う
      function quiz() {
        return new Promise(function (resolve, reject) {
          // setTimeout(function () {
          //   resolve(console.log('非同期成功'));
          // }, 5000);
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

      console.log(jsonDATA);

      // 回答ボタンを追加
      let btnone = document.createElement('button');
      let btntwo = document.createElement('button');
      let btnthree = document.createElement('button');
      let btnfour = document.createElement('button');

      document.getElementById('answer-one').appendChild(btnone);
      btnone.innerHTML = obj.results[0].correct_answer;

      document.getElementById('answer-two').appendChild(btntwo);
      btntwo.innerHTML = obj.results[0].incorrect_answers[0];

      document.getElementById('answer-three').appendChild(btnthree);
      btnthree.innerHTML = obj.results[0].incorrect_answers[1];

      document.getElementById('answer-four').appendChild(btnfour);
      btnfour.innerHTML = obj.results[0].incorrect_answers[2];

      // 
      var x = obj.results[0].correct_answer;
      var y = obj.results[0].incorrect_answers[0];
      var z = obj.results[0].incorrect_answers[1];
      var v = obj.results[0].incorrect_answers[2];
      

      // ランダムに使う配列
      var arr = [x, y, z, v];
      var a = arr.length;

      // シャッフルアルゴリズム
      while (a) {
        var j = Math.floor( Math.random() * a );
        var t = arr[--a];
        arr[a] = arr[j];
        arr[j] = t;
      }

      // シャッフルされた配列の要素を順番に表示する
      arr.forEach( function (value) {
        btnone.innerHTML = x.value
        btntwo.innerHTML =y.value
        btnthree.innerHTML =z.value
        btnfour.innerHTML =v.value
        
      });


      // 取得したデータを表示する
      // 問題文
      document.getElementById('question').innerHTML = obj.results[0].question;
      
      // カテゴリー
      document.getElementById('category').innerHTML = obj.results[0].category;
  
      // 難易度
      document.getElementById('difficulty').innerHTML = obj.results[0].difficulty;
      
    });
  




  })

  
}