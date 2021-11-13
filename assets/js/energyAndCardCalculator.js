var energyCounter = document.getElementById("energyQuantity");
energyCounter = 3;
var cardCounter = document.getElementById("cardsQuantity");
cardCounter = 6;
var deckSize = document.getElementById("deckSize");
deckSize = 24;
var round = document.getElementById("roundNumber");
round = 1;

function energySubtract(){
  energyCounter -= 1;
  if (energyCounter <= 0) {
    energyCounter = 0;
  }
  
  document.getElementById("energyQuantity").innerHTML = energyCounter;
}

function energyAdd(){
  energyCounter += 1;
  if (energyCounter >= 10) {
    energyCounter = 10;
  }
  document.getElementById("energyQuantity").innerHTML = energyCounter;
}

function cardUse(obj){
  if(obj.children[0].style.visibility==='hidden'){
    cardCounter +=1;
  }
  else{
    cardCounter -=1;
  }
  
  if (cardCounter <= 0) {
    cardCounter = 0;
  }
  
  document.getElementById("cardsQuantity").innerHTML = cardCounter;
}

function reset(){
  energyCounter = 3;
  cardCounter = 6;
  deckSize = 24;
  round = 1;
  document.getElementById("energyQuantity").innerHTML = energyCounter;
  document.getElementById("cardsQuantity").innerHTML = cardCounter;
  document.getElementById("deckSize").innerHTML = deckSize;
  document.getElementById("roundNumber").innerHTML = round;
  
  // Axie1 parts clear
  document.getElementById('a1d').style.visibility = "hidden";
  document.getElementById('a1m1').style.visibility = "hidden";
  document.getElementById('a1m2').style.visibility = "hidden";
  document.getElementById('a1h1').style.visibility = "hidden";
  document.getElementById('a1h2').style.visibility = "hidden";
  document.getElementById('a1b1').style.visibility = "hidden";
  document.getElementById('a1b2').style.visibility = "hidden";
  document.getElementById('a1t1').style.visibility = "hidden";
  document.getElementById('a1t2').style.visibility = "hidden";
  
  // Axie2 parts clear
  document.getElementById('a2d').style.visibility = "hidden";
  document.getElementById('a2m1').style.visibility = "hidden";
  document.getElementById('a2m2').style.visibility = "hidden";
  document.getElementById('a2h1').style.visibility = "hidden";
  document.getElementById('a2h2').style.visibility = "hidden";
  document.getElementById('a2b1').style.visibility = "hidden";
  document.getElementById('a2b2').style.visibility = "hidden";
  document.getElementById('a2t1').style.visibility = "hidden";
  document.getElementById('a2t2').style.visibility = "hidden";
  
  // Axie3 parts clear
  document.getElementById('a3d').style.visibility = "hidden";
  document.getElementById('a3m1').style.visibility = "hidden";
  document.getElementById('a3m2').style.visibility = "hidden";
  document.getElementById('a3h1').style.visibility = "hidden";
  document.getElementById('a3h2').style.visibility = "hidden";
  document.getElementById('a3b1').style.visibility = "hidden";
  document.getElementById('a3b2').style.visibility = "hidden";
  document.getElementById('a3t1').style.visibility = "hidden";
  document.getElementById('a3t2').style.visibility = "hidden";

  resizeDeck();
}

function nextRound(){
  round += 1;
  energyCounter += 2;
  if (energyCounter >= 10) {
    energyCounter = 10;
  }

  cardCounter += 3;
  if (cardCounter >= deckSize) {
    cardCounter =  cardCounter - deckSize;
    resetAliveAxies();
  }

  document.getElementById("cardsQuantity").innerHTML = cardCounter;
  document.getElementById("energyQuantity").innerHTML = energyCounter;
  document.getElementById("roundNumber").innerHTML = round;

}

function resizeDeck(){
  axiesAlive = 0;
  if(checkAxieAlive('1')){
    axiesAlive += 1;
  }
  if(checkAxieAlive('2')){
    axiesAlive += 1;
  }
  if(checkAxieAlive('3')){
    axiesAlive += 1;
  }

  /*if(axiesAlive == 0){
    reset();
  }*/
  deckSize = 8 * axiesAlive;
  document.getElementById("deckSize").innerHTML = deckSize;
}

function checkAxieAlive(axieId) {
  var axie = document.getElementById('a' + axieId + 'd');
  if(axie.style.visibility === 'hidden'){
    return true;
  }
  return false;
}

function resetAliveAxies(){
  if(checkAxieAlive(1)){
    resetAxieCards(1);
  }
  if(checkAxieAlive(2)){
    resetAxieCards(2);
  }
  if(checkAxieAlive(3)){
    resetAxieCards(3);
  }
}

function resetAxieCards(axie){
  document.getElementById('a' + axie + 'd').style.visibility = "hidden";
  document.getElementById('a' + axie + 'm1').style.visibility = "hidden";
  document.getElementById('a' + axie + 'm2').style.visibility = "hidden";
  document.getElementById('a' + axie + 'h1').style.visibility = "hidden";
  document.getElementById('a' + axie + 'h2').style.visibility = "hidden";
  document.getElementById('a' + axie + 'b1').style.visibility = "hidden";
  document.getElementById('a' + axie + 'b2').style.visibility = "hidden";
  document.getElementById('a' + axie + 't1').style.visibility = "hidden";
  document.getElementById('a' + axie + 't2').style.visibility = "hidden";
}