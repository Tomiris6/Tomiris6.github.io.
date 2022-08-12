var redflagsList = [
  'Embarrass or make fun of you in front of your friends or family?',
  'Put down your accomplishments?', 
  'Make you feel like you are unable to make decisions?', 
  'Use intimidation or threats to gain compliance?', 
  'tell you that you are nothing without them?', 
  'Treat you roughly—grab, push, pinch, shove or hit you?', 
  'Call you several times a night or show up to make sure you are where you said you would be?',
  'Use drugs or alcohol as an excuse for saying hurtful things or abusing you?', 
  'Blame you for how they feel or act?', 
  'Pressure you sexually for things you aren’t ready for?', 
  'Make you feel like there is “no way out” of the relationship?', 
  'Prevent you from doing things you want – like spending time with friends or family?', 
  'Try to keep you from leaving after a fight or leave you somewhere after a fight to “teach you a lesson”?'
];

var button = document.getElementById("button");
var redFlags = document.getElementById("redFlag");
var counter = 0;

button.addEventListener('click', randomRed);

function randomRed(){
  redFlags.innerHTML = redflagsList [counter];
  counter ++;
  if (counter == redflagsList.length){
    counter = 0;
  }
}
