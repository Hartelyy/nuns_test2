import { scripts } from './con_data.js'

// 질문 화면의 각 요소를 찾아요!
// const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number');
const scriptEl = document.querySelector('.script');
// const choice1El = document.querySelector('.choice1')
// const choice2El = document.querySelector('.choice2')
const imgEl = document.querySelector('.question-box');
const overlay = document.querySelector('.overlay');
const button = document.getElementById('darken');

let currentNumber = 0 // 현재 질문 번호


// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() {
  const script = scripts[currentNumber]
  scriptEl.innerHTML = script.script
  numberEl.innerHTML = script.number
  // choice1El.innerHTML = question.choices[0].text
  // choice2El.innerHTML = question.choices[1].text
  // imgEl.style.backgroundImage = 'url(${script.img})';
  imgEl.style.backgroundImage = `url(${script.img})`; //img 경로 설정
  // progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

// 다음 질문으로 넘어가는 함수
function nextQuestion() {
  if (currentNumber === scripts.length - 1) {
    screenblack();
    // if (script.choices) {
    //   handleChoices (script.choices);
    // } else {
    //   handleNoChoices();
    // }
    return;
  }
  // const script = scripts[currentNumber]
  // mbti = mbti + question.choices[choiceNumber].value
  currentNumber = currentNumber + 1
  renderQuestion();
}


// 클릭했을 때 동작하는 코드.
scriptEl.addEventListener('click', function () {
  nextQuestion();
}); 

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
// choice1El.addEventListener('click', function () {
//   nextQuestion(0)
// })
// choice2El.addEventListener('click', function () {
//   nextQuestion(1)
// })


renderQuestion();


function screenblack() {
  overlay.style.opacity = '0.98';
}


