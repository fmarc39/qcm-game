let answer = [

    {
        question: "Quel est la capitale de la Colombie ?",
        image: "image/colombia-flag.svg",
        choiceA: "BOGOTA",
        choiceB: "CALI",
        choiceC: "MEDELLIN",
        rightchoice: "A",

    },

    {

        question: "Quel est la capitale de l'Equateur ?",
        image: "image/equateur-flag.svg",
        choiceA: "LIMA",
        choiceB: "QUITO",
        choiceC: "PUYO",
        rightchoice: "B",

    },

    {
        question: "Quel est la capitale de l'Australie ?",
        image: "image/australie-flag.svg",
        choiceA: "CAMBERA",
        choiceB: "SYDNEY",
        choiceC: "PERTH",
        rightchoice: "A",
    },

    {
        question: "Quel est la capitale du Sénégal ?",
        image: "image/senegal-flag.png",
        choiceA: "DAKAR",
        choiceB: "SALI",
        choiceC: "YAOUNDE",
        rightchoice: "A",
  
    }
]

// recuperation des elements HTML

const startConainer = document.querySelector('#start')
const quizContainer = document.querySelector('#quizcontainer')
const qimage = document.querySelector("#qimage").childNodes[1];
const question = document.querySelector("#questions");
const light = document.querySelector("#traficlight");
const answerA = document.querySelector("#A");
const answerB = document.querySelector("#B");
const answerC = document.querySelector("#C");
const answerBox = document.querySelector("#answer")
const rightAnswer = 'fas fa-check-circle';
const wrongAnswer = 'fas fa-times-circle';
const startBtn = document.querySelector('#startbtn');
const allAnswer = document.querySelectorAll('p');
var lastQuestionIndex = answer.length - 1;
const scorePagePara = document.querySelector('#score');
const scorePage = document.querySelector("#scorepage");
const commentaire = document.querySelector("#commentaire");
const emoji = document.querySelector('#emoji')

// creation des variables utiles au jeux 

var compteur = 0;
var time = 10;
var score = 0;

// creation de la fonction permettant d'afficher dynamiquement les élements en fonction du compteur 

function affichage (compteur) {

    qimage.src = answer[compteur].image;
    question.innerHTML = answer[compteur].question;
    answerA.innerHTML = answer[compteur].choiceA;
    answerB.innerHTML = answer[compteur].choiceB;
    answerC.innerHTML = answer[compteur].choiceC;

}

// creation de la page de score dynamique en fonction des résultats 

function scorePageDisplay () {

  scorePage.id = 'visiblescore'
  scorePagePara.innerHTML = " Votre score est de : " + score + '/' + compteur + "<br>"

  switch (score) {

      case 0:
        
      commentaire.innerHTML = "' Vous êtes une merde '";
      emoji.className = 'fas fa-poop';
     

      break;

      case 1:

      commentaire.innerHTML ="' C'est pas top '";
      emoji.className = 'far fa-frown';
      break;

      case 2: 

      commentaire.innerHTML = "' C'est la moyenne mais t'es pas Einstein non plus '";
      emoji.className = 'far fa-meh';
      break;

      case 3: 

      commentaire.innerHTML = "' Pas mal '";
      emoji.className = 'far fa-grin';
      break;

      case 4: 

      commentaire.innerHTML = "' Pafait t'es un génie mec '";
      emoji.className = 'fas fa-smile-beam'
      break;
    } 
}

// rendus dynamique de la bare de progression

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById('progress');
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        
      }

      else if (compteur === 4) {

        clearInterval(id)
        time = 1
      }
      
      else if (answerBox.addEventListener('click', function () {
    
      width = 1;
      elem.style.width = width + "%";
  
      })) {}

      else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// creation du compte a rebours 

function cab (time) {

  car.innerHTML = time;

  setInterval(() => {

    time--;
    car.innerHTML = time;


    if (answerBox.addEventListener('click', function () {
    
      time = 10;
      car.innerHTML = time;


    })) {}

    else if (compteur === 4) {

      clearInterval(time)
      time = 1
    }

    else if (time === -1) {

      if(compteur <= lastQuestionIndex) {

      light.children[compteur].childNodes[1].className = wrongAnswer;
      compteur++; affichage(compteur);
      time = 10;
      car.innerHTML = time;
      move();
      }
    }
    
  }, 1000);
}
// creation de la partie logique du jeux avec 


answerBox.addEventListener("click", function (event) {



if (event.target.id === answer[compteur].rightchoice) 


  {light.children[compteur].childNodes[1].className = rightAnswer; 
  
  score++; compteur++;
  
  
if (compteur<= lastQuestionIndex) {affichage(compteur)}

else if (compteur == 4) {scorePageDisplay()};}
  


else{

   {;light.children[compteur].childNodes[1].className = wrongAnswer;
  
  compteur++;
  
  if (compteur<= lastQuestionIndex) {affichage(compteur)}

else if (compteur == 4) {scorePageDisplay();}}

}

});





// affichage de jeux après click sur le bouton PLAY



startBtn.addEventListener('click', function () {

  quizcontainer.id = "hide";
  startConainer.id = "starthide"
  
  affichage(compteur);
  cab(10);
  move();
})

