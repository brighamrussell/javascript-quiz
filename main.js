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
  NumberOfQuestions: 0
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
 iPAGE.innerHTML=pg;
 iQUESTION.innerHTML=quiz.Questions[pg];
 iA.innerHTML=quiz.ANSa[pg];
 iB.innerHTML=quiz.ANSb[pg];
 iC.innerHTML=quiz.ANSc[pg];
 iD.innerHTML=quiz.ANSd[pg];
 iE.innerHTML=quiz.ANSe[pg];
}

var ANSWEREDS=[];

function radi(FA){
console.log('clicked ' + FA );
console.log('Answer is ' + quiz.ANSkey[pg] );


if (FA==quiz.ANSkey[pg]) {
    ANSWEREDS.push("Correct");
    console.log(ANSWEREDS);
    quiz.Score++;
    pg++;
    pagenumber();
} else {
    console.log('Checked');
    ANSWEREDS.push("Wrong");
    console.log(ANSWEREDS);
    pg++;
    pagenumber(); }

quiz.count=(pg+1); 
if (quiz.NumberOfQuestions < (quiz.count)) {
  
  iQUIZ.style.display='none';
  console.log("quiz.Score" + quiz.Score);
  console.log("quiz.NumberOfQuestions" + quiz.NumberOfQuestions);
  iQUESTION.style.display='none';
  iPAGE.style.display='none';
  var finalscore=((quiz.Score/quiz.NumberOfQuestions)*100);
  console.log(finalscore);
  iRESULT.innerHTML=finalscore;
}
}

var pg=0;
