
    ////////////declaring variables///////////////////
    var firstq = false;
    
    var answer1;

    var choiceIndex;

    var i = 0;

    var guessremain = 15;

    var wrongGuessArray = [];

    var intro = new Audio("assets/sounds/MNF.mp3");
    var boo = new Audio("assets/sounds/boo.mp3");
    var cheer =  new Audio("assets/sounds/cheer.mp3")

    ////////////"body" of word guess//////////////////
 
    document.onkeyup=function() {
            answer1 = event.key.toLowerCase();
            statusUpdate("");
            changeStatus("Enter your guess.");
    /////////////Clears helmet from previous round///
            $("#picbox img:last-child").remove();         
            if (answer1 && firstq === false) {

                ///////Win Game///////////////
                if (i === 30) {
                    teamUpdate("You Won!");
                    $("#picbox").append("<img src='assets/images/trophy.png'>");
                    intro.play();
                    cheer.loop = true;
                    cheer.play();
                }

                if (i === 0) {
                    intro.play();
                }
                //////////RESETS AND ADDS DASHES TO TEAM SPACES///////
                teams[i].spaces = [];
                for (var b = 0; b < teams[i].name.length; b++) {
                    teams[i].spaces.push("-");
                }
                teams[i].spaces = teams[i].spaces.join("");
                teamUpdate(teams[i].spaces);
                firstq = true;
                if (firstq) {
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
                    if (teams[i].sbyte) {
                        teams[i].sbyte.play();
                    }
                    //////Jquery to add helmet to picbox////
                    $("#picbox").append(teams[i].imgs);
                    
                    i = i + 1;
                    
                    firstq = false;
                    statusUpdate("Press any key to advance to next round!");
                    
           
                }
            
            }
            /////////////////Game Reset//////////////////////////
            else if ((guessremain-1) === 0) {
                //////Jquery to add helmet to picbox////
                $("#picbox").append("<img id='addhelmet' src='assets/images/defeat.jpg'>");
                teamUpdate("Game Over");
                boo.play();
                changeStatus("Hit any Key to Start over.");
                i = 0;
                firstq = false;
                wrongGuessArray = [];
                guessremain = 15;
            
            }

            else if (teams[i].name.indexOf(answer1) < 0) {
                changeStatus("Wrong! Try Again.")
                wrongGuess(answer1);
                guessR();
                

            }
    }


/////////////////////CREATES WORD ARRAYS///////////////////////////
     function team(name, sbyte, imgs) {
         this.name = name;
         this.spaces = [];
         this.sbyte = sbyte;
         this.imgs = imgs;

     }

     var jets = new team("jets", new Audio("assets/sounds/jets.mp3"), "<img id='addhelmet' src='assets/images/jets.png'>");
     var cards = new team("cardinals", cheer, "<img id='addhelmet' src='assets/images/cards.png'>");
     var ravens = new team("ravens", cheer, "<img id='addhelmet' src='assets/images/ravens.png'>");
     var bills = new team("bills", cheer, "<img id='addhelmet' src='assets/images/bills.png'>");
     var panthers = new team("panthers", new Audio("assets/sounds/panther.mp3"), "<img id='addhelmet' src='assets/images/panthers.png'>");
     var browns = new team("browns", cheer, "<img id='addhelmet' src='assets/images/browns.png'>");
     var cowboys = new team("cowboys", cheer, "<img id='addhelmet' src='assets/images/cowboys.png'>");
     var broncos = new team("broncos", cheer, "<img id='addhelmet' src='assets/images/broncos.png'>");
     var lions = new team("lions", cheer, "<img id='addhelmet' src='assets/images/lions.png'>");
     var packers = new team("packers", cheer, "<img id='addhelmet' src='assets/images/packers.png'>");
     var texans = new team("texans", cheer, "<img id='addhelmet' src='assets/images/texans.png'>");
     var eagles = new team("eagles", new Audio("assets/sounds/eagles.mp3"), "<img id='addhelmet' src='assets/images/eagles.png'>");
     var colts = new team("colts", cheer, "<img id='addhelmet' src='assets/images/colts.png'>");
     var jaguars = new team("jaguars", new Audio("assets/sounds/panther.mp3"), "<img id='addhelmet' src='assets/images/jaguars.png'>");
     var chiefs = new team("chiefs", cheer, "<img id='addhelmet' src='assets/images/chiefs.png'>");
     var chargers = new team("chargers", cheer, "<img id='addhelmet' src='assets/images/chargers.png'>");
     var rams = new team("rams", cheer, "<img id='addhelmet' src='assets/images/rams.png'>");
     var dolphins = new team("dolphins", cheer, "<img id='addhelmet' src='assets/images/dolphins.png'>");
     var vikings = new team("vikings", cheer, "<img id='addhelmet' src='assets/images/vikings.png'>");
     var bengals = new team("bengals", new Audio("assets/sounds/panther.mp3"), "<img id='addhelmet' src='assets/images/bengals.png'>");
     var patriots = new team("patriots", boo, "<img id='addhelmet' src='assets/images/patriots.png'>");
     var saints = new team("saints", cheer, "<img id='addhelmet' src='assets/images/saints.png'>");
     var giants = new team("giants", cheer, "<img id='addhelmet' src='assets/images/giants.png'>");
     var raiders = new team("raiders", cheer, "<img id='addhelmet' src='assets/images/raiders.png'>");
     var bears = new team("bears", new Audio("assets/sounds/dbears.mp3"), "<img id='addhelmet' src='assets/images/bears.png'>");
     var steelers = new team("steelers", cheer, "<img id='addhelmet' src='assets/images/steelers.png'>");
     var niners = new team("fortyniners", cheer, "<img id='addhelmet' src='assets/images/49ers.png'>");
     var seahawks = new team("seahawks", cheer, "<img id='addhelmet' src='assets/images/seahawks.png'>");
     var titans = new team("titans", cheer, "<img id='addhelmet' src='assets/images/titans.png'>");
     var redskins = new team("redskins", cheer, "<img id='addhelmet' src='assets/images/redskins.png'>");
    

     var teams = [jets, cards, ravens, bills, panthers, browns, cowboys, broncos,
                 lions, packers, texans, eagles, colts, jaguars, chiefs, chargers, rams, dolphins, vikings, bengals,
                 patriots, saints, giants, raiders, bears, steelers, niners, seahawks, titans, redskins];

/////////////////////sounds added to team array////////////////////////////////////




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
    
}

/////////////////Changes team / dash field /////////////////////////////

function teamUpdate(message) {
    document.getElementById("team").innerHTML = message;
}

/////////////////Updates Wrong Guess Field /////////////////////////////

function wrongGuess(letter) {
    wrongGuessArray.push(letter);
    var noCommas = wrongGuessArray.join(" ");///removes commas
    document.getElementById("wguess").innerHTML = noCommas;
}