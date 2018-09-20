
    ////////////declaring variables///////////////////
    var firstq = false;
    
    var answer1;

    var choiceIndex;

    var i = 0;

    var guessremain = 15;

    var wrongGuessArray = [];

    var intro = new Audio("assets/sounds/MNF.mp3");

    ////////////"body" of word guess//////////////////
 
    document.onkeyup=function() {
            answer1 = event.key.toLowerCase();
            statusUpdate("");
            changeStatus("Enter your guess.");
            if (answer1 && firstq === false) {
                console.log(answer1);
                if (i === 0) {
                    intro.play();
                }
                teamUpdate(teams[i].spaces);
                firstq = true;
                if (i >= 1) {
                    //////advances round//////////////
                    round(i+1);
                     //////resets wrong guess array////
                    wrongGuessArray.length = 0;
                    document.getElementById("wguess").innerHTML = wrongGuessArray; 

                }
            }

            else if (wrongGuessArray.indexOf(answer1) > -1) {
                changeStatus("Already guessed incorrectly, try again.");
            }
            
            else if(teams[i].name.indexOf(answer1) > -1) {
                
                //////////allOccurances finds the number of times the letter occurs/////
                allOccurances(teams[i].name, answer1); 

                //////////for loop that goes thru all multiples of letters//////
                for (var t = 0; t < results.length; t++) {
                  var occur = results[t];
                  
                  choiceIndex = teams[i].name[occur];
                  console.log("log index " + choiceIndex);
                  var temp = teams[i].spaces.split('');
                  console.log(temp);
                  temp[occur] = answer1;
                  console.log(temp);
                  teams[i].spaces = temp.join('');
                }
                teamUpdate(teams[i].spaces);
                changeStatus("correct!");
                if (teams[i].name === teams[i].spaces) {
                    changeStatus("You guessed the Team!");
                    if (teams[i].sbyte !== 0) {
                        teams[i].sbyte.play();
                    }
                    i = i + 1;
                    firstq = false;
                    statusUpdate("Press any key to advance to next round!");
           
                }
            
            }

            else if (teams[i].name.indexOf(answer1) < 0) {
                changeStatus("Wrong! Try Again.")
                wrongGuess(answer1);
                guessR();
                

            }
    }


/////////////////////CREATES WORD ARRAYS///////////////////////////
     function team(name, spaces, sbyte) {
         this.name = name;
         this.spaces = spaces;
         this.sbyte = sbyte;

     }

     var jets = new team("jets", "----", 1);
     var bears = new team("bears", "-----", 0);
     var eagles = new team("eagles", "------", 0);
     var cards = new team("cardinals", "---------", 0);
     var ravens = new team("ravens", "------", 0);
     var bills = new team("bills", "-----", 0);
     var panthers = new team("panthers", "--------", 0);
     var bengals = new team("bengals", "-------", 0);
     var browns = new team("browns", "------", 0);
     var cowboys = new team("cowboys", "-------", 0);
     var broncos = new team("broncos", "-------", 0);
     var lions = new team("lions", "-----", 0);
     var packers = new team("packers", "-------", 0);
     var texans = new team("texans", "------", 0);
     var colts = new team("colts", "-----", 0);
     var jaguars = new team("jaguars", "-------", 0);
     var chiefs = new team("chiefs", "------", 0);
     var chargers = new team("chargers", "--------", 0);
     var rams = new team("rams", "----");
     var dolphins = new team("dolphins", "--------", 0);
     var vikings = new team("vikings", "-------", 0);
     var patriots = new team("patriots", "--------", 0);
     var saints = new team("saints", "------", 0);
     var giants = new team("giants", "------", 0);
     var raiders = new team("raiders", "-------", 0);
     var steelers = new team("steelers", "--------", 0);
     var niners = new team("fortyniners", "-----------", 0);
     var seahawks = new team("seahawks", "--------", 0);
     var titans = new team("titans", "------", 0);
     var redskins = new team("redskins", "--------", 0);
    

     var teams = [jets, bears, eagles, cards, ravens, bills, panthers, bengals, browns, cowboys, broncos,
                 lions, packers, texans, colts, jaguars, chiefs, chargers, rams, dolphins, vikings,
                 patriots, saints, giants, raiders, steelers, niners, seahawks, titans, redskins];

/////////////////////sounds added to team array////////////////////////////////////
teams[0].sbyte = new Audio("assets/sounds/jets.mp3");


///////////////////Functions////////////////////////////////////////////////////////


/////////////////returns all occurances of particular letter//////////////
function allOccurances(aRay, x) {
    results = [];
    for(var i = 0; i < aRay.length; i++)
        if (aRay[i] === x)
            results.push(i);
    return results;
}

//////////////////Changes the status update/////////////////////////////

function changeStatus(message) {
    document.getElementById("result").innerHTML = message;
}

/////////////////Changes the status update/////////////////////////////

function statusUpdate(message) {
    document.getElementById("quest").innerHTML = message;
}

/////////////////Changes the round / score/////////////////////////////

function round(message) {
    document.getElementById("score").innerHTML = message;
}

/////////////////Subtracts number of guesses and updates///////////////

function guessR() {
    guessremain = guessremain - 1;
    document.getElementById("rguess").innerHTML = guessremain;
    if (guessremain === 0) {
        alert("Game Over!")
    }
}

/////////////////Changes team / dash field /////////////////////////////

function teamUpdate(message) {
    document.getElementById("team").innerHTML = message;
}

/////////////////Updates Wrong Guess Field /////////////////////////////

function wrongGuess(letter) {
    wrongGuessArray.push(letter);
    document.getElementById("wguess").innerHTML = wrongGuessArray;
}