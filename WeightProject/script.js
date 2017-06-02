//variables for the bar load calculator
var weight, lbsofPlates, lbsOfSide, numOfPlates, numOfQuarters, numOfTens, numOfFives, numOfCookies;
//variables for the max rep calculator
var lbsofReps, repInput, oneRM;
//variables for the percentage calculator
var prMax, prInput, ninetyFive, ninety, eightyFive, eighty,
    seventyFive, seventy, sixtyFive, sixty, fivtyFive, fifty;

//function for bar loader calculator
 $(".submitbutton").click(function() { //once button is activated the function is ran
  //grabs the form input and puts it into a variable
  weight = document.getElementById("inputfield");
  //takes 'weight' variable and turns it into an int
  lbsofPlates = (parseInt(weight.value)) - 45;

  //Calculations for individual weight
  lbsOfSide = lbsofPlates/2;
  numOfPlates = Math.floor(lbsOfSide/45);
  numOfQuarters = Math.floor((lbsOfSide - numOfPlates*45)/25);
  numOfTens = Math.floor((lbsOfSide - (numOfPlates*45) - (numOfQuarters*25))/10);
  numOfFives = Math.floor((lbsOfSide - (numOfPlates*45) - (numOfQuarters*25) - (numOfTens*10))/5);
  numOfCookies = Math.floor((lbsOfSide - (numOfPlates*45) - (numOfQuarters*25) - (numOfTens*10) - (numOfFives*5))/2.5);

  //implements the anwser to the id's in html page using JQuery
  $("#numPlate").html(numOfPlates);
  $("#numQuarters").html(numOfQuarters);
  $("#numTens").html(numOfTens);
  $("#numFives").html(numOfFives);
  $("#numCookies").html(numOfCookies);
});
//end function/calculator Bar Load

//function for the one rep max calculator
$(".submitbuttonTwo").click(function() { //once button is activated the function is ran
  //grabs the form input and puts it into variable repInput
  repInput = document.getElementById("maxWeight");
  //takes variable 'repInput' and turns it into an int
  lbsofReps = (parseInt(repInput.value));

  //calculations for oneRm
  oneRM = Math.round((lbsofReps * 1.1307) + 0.69958);

  //implements the answer to the id in the html page using Jquery
  $("#max").html(oneRM);
});
//end function one rep max calculator


//function and variables for the percentage calculator
$(".submitbuttonThree").click(function() { //once button is activated the function is ran
  //grabs the form input and puts it into variable prInput
  prInput = document.getElementById("oneRepMaxInput");
  //takes variable 'prMax' and turns it into an int
  prMax = (parseInt(prInput.value));

  //calculations for individual percent
  ninetyFive = Math.round(prMax * .95);
  ninety = Math.round(prMax * .90);
  eightyFive = Math.round(prMax * .85);
  eighty = Math.round(prMax * .80);
  seventyFive = Math.round(prMax * .75);
  seventy = Math.round(prMax * .70);
  sixtyFive = Math.round(prMax * .65);
  sixty = Math.round(prMax * .60);
  fiftyFive = Math.round(prMax * .55);
  fifty = Math.round(prMax * .50);

  //implements the answers to the id's of html page using jQuery
  nineFive.innerHTML = ninetyFive;
  nineZero.innerHTML = ninety;
  eightFive.innerHTML = eightyFive;
  eightZero.innerHTML = eighty;
  sevenFive.innerHTML = seventyFive;
  sevenZero.innerHTML = seventy;
  sixFive.innerHTML = sixtyFive;
  sixZero.innerHTML = sixty;
  fiveFive.innerHTML = fiftyFive;
  fiveZero.innerHTML = fifty;
});
//end function percentage calculator
