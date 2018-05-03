/*!
 * Copyright 2018 - Brigham Rex Russell
 * MIT License
 */
var quiz = {
  Json: [],
  Questions: [],
  ANSa: [],
  ANSb: [],
  ANSc: [],
  ANSd: [],
  ANSe: [],
  ANSkey: [],
  Page: 0,
  Answers: [],
  answered: [],
  Score: 0,
  count: 0,
  NumberOfQuestions: 0,
  N: 0 // Number of answers for a given question
};

const iQUIZ = document.getElementById("idQUIZ"),
  iSTART = document.getElementById("idSTART"),
  iNEXT = document.getElementById("idNEXT"),
  iPAGE = document.getElementById("idPAGE"),  
  iQUESTION = document.getElementById("idQUESTION"),
  iA = document.getElementById("idA"),
  iB = document.getElementById("idB"),
  iC = document.getElementById("idC"),
  iD = document.getElementById("idD"),
  iE = document.getElementById("idE"),
  iAA = document.getElementById("idAA"),
  iBB = document.getElementById("idBB"),
  iCC = document.getElementById("idCC"),
  iDD = document.getElementById("idDD"),
  iEE = document.getElementById("idEE"),
  iANSWERS = document.getElementById("idANSWERS"),
  iRESULT = document.getElementById("idRESULT"),
  iJSON = document.getElementById("idJSON");

function pulljson(){
 var xhr = new XMLHttpRequest();
 xhr.open('GET', 'quiz.json', true);
 xhr.onload = function(){
  if(this.status == 200){
   quiz.Json = JSON.parse(this.responseText);  
   quiz.NumberOfQuestions=quiz.Json.length;
   
   

   for(var i=0;i<quiz.Json.length;i++){
    quiz.Questions.push(quiz.Json[i].question);
    quiz.ANSa.push(quiz.Json[i].answers.A);
    quiz.ANSb.push(quiz.Json[i].answers.B);
    quiz.ANSc.push(quiz.Json[i].answers.C);
    quiz.ANSd.push(quiz.Json[i].answers.D);
    quiz.ANSe.push(quiz.Json[i].answers.E);
    quiz.ANSkey.push(quiz.Json[i].correctAnswer);}
  } else {quiz.request.onerror = function() {
console.error('An error occurred fetching the JSON from ' + quiz.url);
}}

 console.log('Questions ' + quiz.Questions + "\n");
 console.log('ANSa ' + quiz.ANSa + "\n");
 console.log('ANSb ' + quiz.ANSb + "\n");
 console.log('ANSc ' + quiz.ANSc + "\n");
 console.log('ANSd ' + quiz.ANSd + "\n");
 console.log('ANSe ' + quiz.ANSe + "\n");
 console.log('ANSkey ' + quiz.ANSkey + "\n");
pg=0;
pagenumber();}
xhr.send();}

function pagenumber(){
 iAA.checked = false;
 iBB.checked = false;
 iCC.checked = false;
 iDD.checked = false;
 iEE.checked = false;
 iPAGE.innerHTML='Question ' + (pg+1);
 iQUESTION.innerHTML=quiz.Questions[pg];
 iA.innerHTML=quiz.ANSa[pg];
 iB.innerHTML=quiz.ANSb[pg];
 iC.innerHTML=quiz.ANSc[pg];
 iD.innerHTML=quiz.ANSd[pg];
 iE.innerHTML=quiz.ANSe[pg];
}

var ANSWEREDS=[];
function box(FA){

var re = new RegExp(FA);
iRESULT.innerHTML='';
console.log('clicked ' + FA );
console.log('Answer is ' + quiz.ANSkey[pg] );
console.log(ANSWEREDS);
quiz.N=quiz.ANSkey[pg].length;
var NN=quiz.N;
  if (NN==1) {
    console.log('NN = 1');
    if (FA==quiz.ANSkey[pg]) {
      ANSWEREDS.push("Correct");
      console.log('Correct');
      iRESULT.innerHTML='Correct';
      quiz.Score++;              
      pg++;
      pagenumber();
    } else {
      ANSWEREDS.push("Wrong");
      iRESULT.innerHTML='Wrong';
      console.log(ANSWEREDS);
      pg++;
      pagenumber();
    }
  } else if (NN==2) {
    console.log('NN = 2');
    if (re.test(quiz.ANSkey[pg])){
      quiz.ANSkey[pg] = quiz.ANSkey[pg].split(FA).join('');
      iRESULT.innerHTML='Correct. Select one more answer';
      console.log('Correct. Select one more answer');
    } else {
      ANSWEREDS.push("Wrong");
      iRESULT.innerHTML='Wrong';
      console.log(ANSWEREDS);
      pg++;
      pagenumber();
    }
  } else if (NN==3) {
    console.log('NN = 3');
    if (re.test(quiz.ANSkey[pg])){
      quiz.ANSkey[pg] = quiz.ANSkey[pg].split(FA).join('');
      iRESULT.innerHTML='Correct. Select two more answers';
      console.log('Correct. Select two more answers');
    } else {
      ANSWEREDS.push("Wrong");
      iRESULT.innerHTML='Wrong';
      console.log(ANSWEREDS);
      pg++;
      pagenumber();
    }
  } else if (NN==4) {
    console.log('NN = 4');
    if (re.test(quiz.ANSkey[pg])){ 
      quiz.ANSkey[pg] = quiz.ANSkey[pg].split(FA).join('');
      iRESULT.innerHTML='Correct. Select three more answers';
      console.log('Correct. Select three more answers');
    } else {
      ANSWEREDS.push("Wrong");
      iRESULT.innerHTML='Wrong';
      console.log(ANSWEREDS);
      pg++;
      pagenumber();
  }
}
if (pg < (quiz.NumberOfQuestions)) { } else {  
  iQUIZ.style.display='none';
  console.log("quiz.Score" + quiz.Score);
  console.log("quiz.NumberOfQuestions" + quiz.NumberOfQuestions);
  iQUESTION.style.display='none';
  iPAGE.style.display='none';
  var finalscore='You Scored ' + ((quiz.Score/quiz.NumberOfQuestions)*100) + ' Percent';
  console.log(finalscore);
  iRESULT.innerHTML=finalscore;
}
}

