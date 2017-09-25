var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var remaining = document.getElementById("remaining");
var guesses = document.getElementById("guesses");
var outcome = document.getElementById("outcome");

game = {
    guessesLeft: 15,
    wins: 0,
    losses: 0,
    lettersGuessed: "",
    computerChoice: "",
    outcome: "",
    pickLetter: function() {
        this.computerChoice = letters[Math.floor(Math.random() * letters.length)];
    }, 
    playerGuess: function(letter) {
        letter = letter.toLowerCase();
        if(letter === this.computerChoice) {
            this.wins += 1;
            this.outcome = "<h1>The letter was " + letter + " !!</h1><h1>Congratulations, you win!</h1><br><p>Press any key to start a new round</p>";
            return true;
        }

        else if(this.guessesLeft > 1) {
            outcome.innerHTML = "Guess Again";
            if(this.lettersGuessed.length != 0) {
                this.lettersGuessed += ", " + letter;
            }
            else{
                this.lettersGuessed = letter;
            }
            this.guessesLeft -= 1;
            this.oucome = "Nope, Guess again!"
        }

        else{
            this.outcome = "<h1>Sorry, you lose; the letter was " + this.computerChoice + "<p> press any key to start again</p>";
        }
        return false;
    },
    newGame: function(){
        this.pickLetter();
        this.lettersGuessed = "";
        this.guessesLeft = "";
    }
}  //end game object

function updateStats(){
    wins.innerHTML = game.wins;
    losses.innerHTML = game.losses;
    remaining.innerHTML = game.guessesLeft;
    guesses.innerHTML = game.lettersGuessed
    outcome.innerHTML = game.outcome;
}

game.pickLetter();
console.log(game.computerChoice);

document.onkeyup = function(event){
    round = game.playerGuess(event.key);
    updateStats();
    if (round){
        alert("Would you like to play again?");

    }
}