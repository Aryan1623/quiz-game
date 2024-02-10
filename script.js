
const questions = [
    {
        question: "Which of these is located in Agra?",
        answers: [
          {text:"Red Fort" , correct:false},
          {text:"Taj Mahal" , correct:true},
          {text:"Golden Temple" , correct:false},
          {text:"Statue of Unity" , correct:false},
        ]
    },
    {
        question:"Which is the largest artificial lake in world?",
        answers: [
          {text:"Lake Kariba" , correct:true},
          {text:"Lake Volta" , correct:false},
          {text:"Lake Guri" , correct:false},
          {text:"Lake Nasser" , correct:false},
        ]
    },
    {
      question:"Who is world's richest person?",
      answers: [
        {text:"Satya Nadela" , correct:false},
        {text:"Gautam Adani" , correct:false},
        {text:"Elon Musk" , correct:true},
        {text:"Mukesh Ambani" , correct:false},
      ]
  },
  {
    question:"Which is world's largest flower?",
    answers: [
      {text:"Rafflesia Arnoldii" , correct:true},
      {text:"Middlemist red" , correct:false},
      {text:"Oaho stenogyne" , correct:false},
      {text:"Nepenthes Tenax" , correct:false},
    ]
},
]

let questionno = document.getElementById("question");
let answersno = document.getElementById("answer");
let nextbtn = document.getElementById("move");
let questionindex = 0;
let sum = 0;

function startquiz(){
    questionindex = 0;
    sum = 0;
    showquestion();
}
function showquestion(){
  reset();
    let currentQuestion = questions[questionindex];
    let questionnum = questionindex+1;
    questionno.innerHTML = questionnum + ". " + currentQuestion.question;
     currentQuestion.answers.forEach(answer=>{
     let button = document.createElement("button");
     button.classList.add("solution");
     button.innerHTML = answer.text;
     answersno.appendChild(button);
     if(answer.correct){
      button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectans);
    })
}
function reset(){
  nextbtn.style.display = "none";
  while(answersno.firstChild){
    answersno.removeChild(answersno.firstChild);
  }
}

function selectans(e){
const selectedbtn = e.target;
let iscorrect = selectedbtn.dataset.correct === "true";
if(iscorrect){
  selectedbtn.classList.add("correct");
  sum++;
}
else{
  selectedbtn.classList.add("incorrect");
}
Array.from(answersno.children).forEach(button => {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled="true";
})
nextbtn.style.display = "block";
}
function showscore(){
  reset();
  questionno.innerHTML = `Congratulations you answered ${sum} out of ${questions.length} correctly!`;
  nextbtn.style.display = "none";
}
function handlenext(){
  questionindex++
  if(questionindex<questions.length){
     showquestion()
  }
  else{
    showscore();
  }

}
nextbtn.addEventListener("click" , ()=>{
  if(questionindex<questions.length){
    handlenext();
  }
  else{
    showquestion();
  }
})

startquiz();
