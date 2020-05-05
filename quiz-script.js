var currentQuestion=0;
var score=0;
var totQuestions=  myQuestions.length;

var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');
var counter=document.getElementById('counter');
var showResults=document.getElementById('results');

function loadQue(questionIndex){
  var q=myQuestions[questionIndex];
  questionEl.textContent= (questionIndex + 1) + "." + q.question;
  opt1.textContent=q.a;
  opt2.textContent=q.b;
  opt3.textContent=q.c;
  opt4.textContent=q.d;
};

function loadNextQuestion(){
 var selectedOption =document.querySelector('input[type=radio]:checked');
 if(!selectedOption){
   alert('please seclect your anwser');
   return;
 }
 var answer=selectedOption.value;
 if(myQuestions[currentQuestion].answers == answer){
   score ++;
 }
 
 selectedOption.checked = false;

 currentQuestion ++;
 if(currentQuestion == totQuestions-1){
   nextButton.textContent="finish";
 }
 if(currentQuestion == totQuestions){
   container.style.display='none';
   resultCont.style.display='';
   counter.innerHTML=`${score} out of ${myQuestions.length}`
   resultCont.textContent='Your Score:' + score;
   return;
 }
 counter.innerHTML=`${score} out of ${myQuestions.length}`
 loadQue(currentQuestion);
}
loadQue(currentQuestion);



