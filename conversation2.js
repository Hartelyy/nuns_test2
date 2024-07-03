import { scripts2 } from './con_data.js'

// 질문 화면의 각 요소를 찾아요!
// const progressValueEl = document.querySelector('.progress .value')

const numberEl = document.querySelector('.number'); 
const imgEl = document.querySelector('.question-box');
const overlay = document.querySelector('.overlay');
const button = document.getElementById('darken');

let scriptEl = document.querySelector('.script');
let currentNumber = 0 // 현재 질문 번호



// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() {
  const script = scripts[currentNumber]
  scriptEl.innerHTML = script.script
  numberEl.innerHTML = script.number
  choice 
  imgEl.style.backgroundImage = `url(${script.img})`; //img 경로 설정
}

// 다음 질문으로 넘어가는 함수
function nextQuestion() {
  if (currentNumber === scripts.length - 1) {
    screenblack();
    scriptEl = document.querySelector('.script')
    // return; 
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

renderQuestion();


function screenblack() {
  overlay.style.opacity = '0.98';
}

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

