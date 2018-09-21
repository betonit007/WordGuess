
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
    /////////////Clears helmet from previous round///
            $("#picbox img:last-child").remove();         
            if (answer1 && firstq === false) {
                if (i === 0) {
                    intro.play();
                }
                teamUpdate(teams[i].spaces);
                firstq = true;
                if (i >= 1) {
                ///////////advances round//////////////
                    round(i+1);
                ///////////resets wrong guess array////
                    wrongGuessArray.length = 0;
                    document.getElementById("wguess").innerHTML = wrongGuessArray; 

                }
            }

            else if (wrongGuessArray.indexOf(answer1) > -1) {
                changeStatus("Already guessed, try again!");
            }
            
            else if(teams[i].name.indexOf(answer1) > -1) {
                
                //////////allOccurances finds the number of times the letter occurs/////
                allOccurances(teams[i].name, answer1); 

                //////////for loop that goes thru all multiples of letters//////
                for (var t = 0; t < results.length; t++) {
                  var occur = results[t];
                  
                  choiceIndex = teams[i].name[occur];
                  var temp = teams[i].spaces.split('');
                  temp[occur] = answer1;
                  teams[i].spaces = temp.join('');
                }
                teamUpdate(teams[i].spaces);
                changeStatus("correct!");
                if (teams[i].name === teams[i].spaces) {
                    changeStatus("You guessed the Team!");
                    if (teams[i].sbyte !== 0) {
                        teams[i].sbyte.play();
                    }
                    //////Jquery to add helmet to picbox////
                    $("#picbox").append(teams[i].imgs);
                    
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
     function team(name, spaces, sbyte, imgs) {
         this.name = name;
         this.spaces = spaces;
         this.sbyte = sbyte;
         this.imgs = imgs;

     }

     var jets = new team("jets", "----", 1, "<img id='addhelmet' src='assets/images/jets.png'>");
     var bears = new team("bears", "-----", 0, "<img id='addhelmet' src='assets/images/bears.png'>");
     var eagles = new team("eagles", "------", 0, "<img id='addhelmet' src='assets/images/eagles.png'>");
     var cards = new team("cardinals", "---------", 0, "<img id='addhelmet' src='assets/images/cards.png'>");
     var ravens = new team("ravens", "------", 0, "<img id='addhelmet' src='assets/images/ravens.png'>");
     var bills = new team("bills", "-----", 0, "<img id='addhelmet' src='assets/images/bills.png'>");
     var panthers = new team("panthers", "--------", 0, "<img id='addhelmet' src='assets/images/panthers.png'>");
     var bengals = new team("bengals", "-------", 0, "<img id='addhelmet' src='assets/images/bengals.png'>");
     var browns = new team("browns", "------", 0, "<img id='addhelmet' src='assets/images/browns.png'>");
     var cowboys = new team("cowboys", "-------", 0, "<img id='addhelmet' src='assets/images/cowboys.png'>");
     var broncos = new team("broncos", "-------", 0, "<img id='addhelmet' src='assets/images/broncos.png'>");
     var lions = new team("lions", "-----", 0, "<img id='addhelmet' src='assets/images/lions.png'>");
     var packers = new team("packers", "-------", 0, "<img id='addhelmet' src='assets/images/packers.png'>");
     var texans = new team("texans", "------", 0, "<img id='addhelmet' src='assets/images/texans.png'>");
     var colts = new team("colts", "-----", 0, "<img id='addhelmet' src='assets/images/colts.png'>");
     var jaguars = new team("jaguars", "-------", 0, "<img id='addhelmet' src='assets/images/jaguars.png'>");
     var chiefs = new team("chiefs", "------", 0, "<img id='addhelmet' src='assets/images/chiefs.png'>");
     var chargers = new team("chargers", "--------", 0, "<img id='addhelmet' src='assets/images/chargers.png'>");
     var rams = new team("rams", "----", 0, "<img id='addhelmet' src='assets/images/rams.png'>");
     var dolphins = new team("dolphins", "--------", 0, "<img id='addhelmet' src='assets/images/dolphins.png'>");
     var vikings = new team("vikings", "-------", 0, "<img id='addhelmet' src='assets/images/vikings.png'>");
     var patriots = new team("patriots", "--------", 0, "<img id='addhelmet' src='assets/images/patriots.png'>");
     var saints = new team("saints", "------", 0, "<img id='addhelmet' src='assets/images/saints.png'>");
     var giants = new team("giants", "------", 0, "<img id='addhelmet' src='assets/images/giants.png'>");
     var raiders = new team("raiders", "-------", 0, "<img id='addhelmet' src='assets/images/raiders.png'>");
     var steelers = new team("steelers", "--------", 0, "<img id='addhelmet' src='assets/images/steelers.png'>");
     var niners = new team("fortyniners", "-----------", 0, "<img id='addhelmet' src='assets/images/49ers.png'>");
     var seahawks = new team("seahawks", "--------", 0, "<img id='addhelmet' src='assets/images/seahawks.png'>");
     var titans = new team("titans", "------", 0, "<img id='addhelmet' src='assets/images/titans.png'>");
     var redskins = new team("redskins", "--------", 0, "<img id='addhelmet' src='assets/images/redskins.png'>");
    

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