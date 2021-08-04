function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
var level = "1";
document.getElementById('level').innerHTML = level;
function changelevel(thelevel){
  can=document.getElementById('myCanvas');
  can.style.background='blue';
  can.style.color='white';
  can.style.fontSize='30px';
  can.style.textShadow='none';
  can.style.opacity='none';
  can.style.textAlign='center';
  can.innerHTML="<p>Find the odd one out</p><p id='text'></p>";
  level = thelevel
  document.getElementById('level').innerHTML = thelevel
  document.getElementById('timer').innerHTML =
  01 + ":" + 00
  startTimer();
  score = 0;
  document.getElementById('score').innerHTML = 0
  var x = document.cookie;
  if (typeof x === 'string' || x instanceof String) {
    //pass
  } else {
    document.cookie = "hs=0,hs1=0,hs2=0,hs3=0;expires=18 Dec 4040 12:00:00 UTC";
  }
  if (x == ""){
    document.cookie = "hs=0,hs1=0,hs2=0,hs3=0;expires=18 Dec 4040 12:00:00 UTC";
  }
  x = document.cookie
  var something = x.split(",")[parseInt(thelevel)];
  var newcookie = something.replace(`hs${document.getElementById('level').innerText}=`,'');
  document.getElementById('cookie').innerHTML = newcookie;
  changegame();
}
document.getElementById('timer').innerHTML =
  01 + ":" + 00
startTimer();
var x = document.cookie;
if (typeof x === 'string' || x instanceof String) {
  //pass
} else {
  document.cookie = "hs=0,hs1=0,hs2=0,hs3=0;expires=18 Dec 4040 12:00:00 UTC; path=/";
}
if (x == ""){
  document.cookie = "hs=0,hs1=0,hs2=0,hs3=0;expires=18 Dec 4040 12:00:00 UTC; path=/";
}
x = document.cookie
var something = x.split(",")[parseInt(document.getElementById('level').innerText)];
var cookie = something.replace(`hs${document.getElementById('level').innerText}=`,'');
document.getElementById('cookie').innerHTML =
  cookie
var game = true;
const all = {"o": "a", "O": "0", "a": "o", "0": "O", "m": "w", "w": "m"}
const all2 = {"a": "á", "á": "a", "o": "ò", "ò": "o", "u": "ù", "ù": "u", "e": "é", "é": "e"}
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    var thescore = document.getElementById('score').innerText;
    var thecookie = document.getElementById('cookie').innerText;
    if (parseInt(thescore) > parseInt(thecookie)){
      var x = document.cookie;
      var cookie = x.replace(`hs${document.getElementById('level').innerText}=${thecookie}`,`hs${document.getElementById('level').innerText}=${thescore}`);
      document.cookie = cookie
    }
    can=document.getElementById('myCanvas');
    can.style.background='#171D2D';
    can.style.color='#2f799c';
    can.style.fontSize='60px';
    can.style.textShadow='0.5px 1px 1.5px black';
    can.style.opacity='100%';
    can.style.textAlign='center';
    can.innerHTML='The game ENDED!!!'
    return;
  } 
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

function changegame(){
  const allletter2 = ["o", "a", "0", "O", "w", "m"];
  const allletter1and3 = ["a", "á", "o", "ò", "u", "ù", "e", "é"]
  if (document.getElementById('level').innerText == "2"){
    var iindex = Math.floor(Math.random() * 5);
    var letter = allletter2[iindex];
    var special = getKeyByValue(all, letter);
  } else {
    var iindex = Math.floor(Math.random() * 7);
    var letter = allletter1and3[iindex];
    var special = getKeyByValue(all2, letter);
  }
  var index = Math.floor(Math.random() * 26);
  var text = "";
  for (let i = 0; i < 25; i++) {
    text += letter;
  }
  var textarray = text.split("");
  textarray.splice(index, 0, special);
  var allcode = "";
  for (lettera of textarray){
    if (document.getElementById('level').innerText == "3"){
      if (lettera === special){
        allcode = allcode + `<strong class="absolute" onclick="scorechange()">${lettera}</strong>`
      } else {
        allcode = allcode + `<strong class="absolute">${lettera}</strong>`
      }
    } else {
      if (lettera === special){
        allcode = allcode + `<strong onclick="scorechange()">${lettera}</strong>`
      } else {
        allcode = allcode + `<strong>${lettera}</strong>`
      }
    }
  }
  document.getElementById('text').innerHTML = allcode;
}
var score = 0;
document.getElementById('score').innerHTML =
  score
changegame();
function scorechange(){
  if (game == true){
    changegame();
    score = score + 1;
    document.getElementById('score').innerHTML =
    score;
  }
}