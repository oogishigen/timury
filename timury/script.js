function updateUIOfCountdown() {

   //location.href = `./test_name.html?deadline=${value}&data=${values}`

   const parm = [...new URLSearchParams(location.search).entries()]
  .reduce((obj, e) => ({...obj, [e[0]]: e[1]}), {});

   location.search.substring(1 + "data=", location.search.length);
   var sendText = parm.data;
   document.getElementById("sendText").innerText=sendText;

   location.search.substring(1 + "deadline=", location.search.length);
   const v = parm.deadline;
   const par = parseInt(v);

   const time = new Date(par);

   const now = new Date(); //現在時刻を取得

   //時間の差を取得（ミリ秒）取得した時間は日本時間と9時間の差がある。9時間をmsに変換したものを引いた。
   const diff = time.getTime() - now.getTime() - 32400000;

   //カウントが0になったら止まる。

   if(diff >= 0){

   //ミリ秒から単位を修正
   const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
   const calcHour = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000 / 60 / 60);
   const calcMin = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000 / 60) % 60;
   const calcSec = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000) % 60;

   day = document.getElementById('day');
   hour = document.getElementById('hour');
   min = document.getElementById('min');
   sec = document.getElementById('sec');



   //取得した時間を表示（2桁表示）
   day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
   hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
   min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
   sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
   }

   else {
      const calcDay = 0;
      const calcHour = 0;
      const calcMin = 0;
      const calcSec = 0;
   
      day = document.getElementById('day');
      hour = document.getElementById('hour');
      min = document.getElementById('min');
      sec = document.getElementById('sec');
   
      day.innerHTML = calcDay;
      hour.innerHTML = calcHour;
      min.innerHTML = calcMin;
      sec.innerHTML = calcSec;
  }
}

window.addEventListener('load', function () {
   updateUIOfCountdown();
   setInterval(updateUIOfCountdown, 1000);
})

