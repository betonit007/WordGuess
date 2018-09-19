
    ////////////declaring variables///////////////////
    var firstq = false;
    
    var answer1;

    var choiceIndex;

    var i = 0;

    ////////////"body" of word guess//////////////////
 
    document.onkeyup=function() {
               answer1 = event.key.toLowerCase();
            
            if (answer1 === 'y' && firstq === false) {
                console.log(answer1);
                document.getElementById("quest").innerHTML = teams[i].spaces;
                firstq = true;
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
                document.getElementById("quest").innerHTML = teams[i].spaces;
                document.getElementById("result").innerHTML = "correct!";
                if (teams[i].name === teams[i].spaces) {
                    alert("You guessed the Team!");
                    i = i + 1;
                    firstq = false;
                    alert("Press 'y' for next round!");
                }
        
            
            }

            else if (teams[i].name.indexOf(answer1) < 0) {
                document.getElementById("result").innerHTML = "wrong!"
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