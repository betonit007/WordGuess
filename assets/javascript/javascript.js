
    ////////////declaring variables///////////////////
    var firstq = false;
    
    var answer1;

    var choiceIndex;

    var i = 0;

    var guessremain = 15;

    var wrongGuessArray = [];

    ////////////"body" of word guess//////////////////
 
    document.onkeyup=function() {
               answer1 = event.key.toLowerCase();
               statusUpdate("");
               changeStatus("Enter your guess.");
            if (answer1 && firstq === false) {
                console.log(answer1);
                teamUpdate(teams[i].spaces);
                firstq = true;
                if (i >= 1) {
                    //////advances round//////////////
                    round(i+1);
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
                    i = i + 1;
                    firstq = false;
                    statusUpdate("Press any key to advance to next round!");
                    //////resets wrong guess array////
           
                }
        
            
            }

            else if (teams[i].name.indexOf(answer1) < 0) {
                changeStatus("Wrong! Try Again.")
                wrongGuess(answer1);
                guessR();
                

            }
    }


/////////////////////CREATES WORD ARRAYS///////////////////////////
     function team(name, spaces) {
         this.name = name;
         this.spaces = spaces;

     }

     var jets = new team("jets", "----");
     var bears = new team("bears", "-----");
     var eagles = new team("eagles", "------");
     var cards = new team("cardinals", "---------");
     var ravens = new team("ravens", "------");
     var bills = new team("bills", "-----");
     var panthers = new team("panthers", "--------");
     var bengals = new team("bengals", "-------");
     var browns = new team("browns", "------");
     var cowboys = new team("cowboys", "-------");
     var broncos = new team("broncos", "-------");
     var lions = new team("lions", "-----");
     var packers = new team("packers", "-------");
     var texans = new team("texans", "------");
     var colts = new team("colts", "-----");
     var jaguars = new team("jaguars", "-------");
     var chiefs = new team("chiefs", "------");
     var chargers = new team("chargers", "--------");
     var rams = new team("rams", "----");
     var dolphins = new team("dolphins", "--------");
     var vikings = new team("vikings", "-------");
     var patriots = new team("patriots", "--------");
     var saints = new team("saints", "------");
     var giants = new team("giants", "------");
     var raiders = new team("raiders", "-------");
     var steelers = new team("steelers", "--------");
     var niners = new team("fortyniners", "-----------");
     var seahawks = new team("seahawks", "--------");
     var titans = new team("titans", "------");
     var redskins = new team("redskins", "--------");


     var teams = [jets, bears, eagles, cards, ravens, bills, panthers, bengals, browns, cowboys, broncos,
                 lions, packers, texans, colts, jaguars, chiefs, chargers, rams, dolphins, vikings,
                 patriots, saints, giants, raiders, steelers, niners, seahawks, titans, redskins];


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