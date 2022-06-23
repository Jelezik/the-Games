let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");

function jump() {
 if (dino.classlist != "jump") {
  dino.classList.add("jump");
 }

  setTimeout(function () {
   dino.classList.remove("jump");
      }, 550)
}
onkeydown = jump;

 const isAlive = setInterval( function () {
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
 let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

 if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
  alert(`Game over! Your score: ${counter}`)
  counter = 0;
 }
}, 10)

let score = document.getElementById("score");
let counter = 0;
let scoreType = setInterval(() => {
 score.innerHTML = `Your score is: ${counter}`;
 counter++;
}, 500)

// создаем лучший результат путем того, что задаем массив, и далее пушем каждое число туда. В конце при помощи модуля Math
// мы находим самое большое число в массиве. это действие проделывается каждые 0.5 секунды
let bestScore = document.getElementById("bestScore");
let scoreMassive = [];
let pushMassive = setInterval(() => {
 scoreMassive.push(counter);
 let largeNumber = Math.max.apply(Math, scoreMassive);
 return bestScore.innerHTML = `High score: ${largeNumber}`;
}, 500)






