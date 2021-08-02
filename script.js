document.getElementById('timer').innerHTML =
  01 + ":" + 00
startTimer();
var x = document.cookie;
var something = x.split(";")[0];
var cookie = something.replace('hs=','');
if (typeof cookie === 'string' || cookie instanceof String) {
  //pass
} else {
  cookie = "0"
}
if (cookie == ""){
  cookie = "0"
}
document.getElementById('cookie').innerHTML =
  cookie
var game = true;
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
const all = {"@": "a", "O": "0", "a": "@", "0": "O", "m": "w", "w": "m"}
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
      document.cookie = `hs=${document.getElementById('score').innerHTML}; expires=Thu, 18 Dec 4000 12:00:00 UTC`;
    }
    can=document.getElementById('myCanvas');
    can.style.background='red';
    can.style.color='black';
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
  const allletter = ["@", "a", "0", "O", "w", "m"];
  var iindex = Math.floor(Math.random() * 5);
  var letter = allletter[iindex];
  var special = getKeyByValue(all, letter);
  var index = Math.floor(Math.random() * 26);
  var text = "";
  for (let i = 0; i < 25; i++) {
    text += letter;
  }
  var textarray = text.split("");
  textarray.splice(index, 0, special);
  var allcode = ""
  for (lettera of textarray){
    if (lettera === special){
      allcode = allcode + `<strong onclick="scorechange()">${lettera}</strong><br>`
    } else {
      allcode = allcode + `<strong>${lettera}</strong><br>`
    }
  }
  document.getElementById('text').innerHTML = allcode;
}
var score = 0;
document.getElementById('score').innerHTML =
  score
changegame();
function scorechange() {
  if (game == true) {
    changegame();
    score = score + 1;
    document.getElementById('score').innerHTML =
    score
  }
}