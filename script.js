let score=0;
let result;
const choice=['Rock','Paper','Scissor'];
const rock=document.querySelector('.rock')
const paper=document.querySelector('.paper')
const scissor=document.querySelector('.scissor')
const Choice1=document.querySelector('.Choice1')
const Choice2=document.querySelector('.Choice2')
const resultContainer=document.querySelector('.resultContainer')
let playerChoice;
let compChoice;

// first select choice then computer start game
rock.addEventListener('click',()=>{
  playerChoice=choice[0];
  Choice2.textContent=`Player Choice:${playerChoice}`
  playGame();
  resultContainer.classList.add('resultActive')
  })

paper.addEventListener('click',()=>{
  playerChoice=choice[1];
  Choice2.textContent=`Player Choice:${playerChoice}`
  playGame();
  resultContainer.classList.add('resultActive')
})

scissor.addEventListener('click',()=>{
   playerChoice=choice[2];
   Choice2.textContent=`Player Choice:${playerChoice}`
   playGame();
   resultContainer.classList.add('resultActive')
})


function playGame(){
  compChoice=comp();
  function comp(){
    let random=Math.random()*100;
    if(random<=33) return choice[0];
    else if(random<=66) return choice[1];
    else return choice[2];
  }

  Choice1.textContent=`Computer Choice:${compChoice}`
  const resultBox=document.querySelector('.resultBox')
  const scoreBox=document.querySelector('.scoreBox')

// Rules 
  if(playerChoice==compChoice) {
   result='Tie 🙃 ! '
 }
  else if((playerChoice==choice[0]&&compChoice==choice[2])||(playerChoice==choice[1]&&compChoice==choice[0])||(playerChoice==choice[2]&&compChoice==choice[1])){
   result='You Win 😍 !'
   score++;
 }

  else result='You Lose 🤐'

resultBox.textContent=result;
scoreBox.textContent=`Score:${score}`

}

const reset=document.querySelector('.Btn2');
const playAgain=document.querySelector('.Btn1');
reset.addEventListener('click',()=>{
  score=0;
  resultContainer.classList.remove('resultActive')
})
playAgain.addEventListener('click',()=>{
  resultContainer.classList.remove('resultActive')
})








