//Create a start quiz button

//Create a timer function that is activated when the start quiz button is clicked

    //Create a function to take wrong answers and subtract 10 seconds

//Create text modifier for the questions

//Create text modifier for the answer options

//Create buttons for questions

//Create a function to count correct answers
var practiceScore = 75



var submitScoreBtn=document.getElementById("sbmt-int-btn");

function savePlayerScoreInitials(event) {
    event.preventDefault ();

    console.log("button-click");

    var playerInitials=document.getElementById("initials-form");
    
    console.log(playerInitials.value);

    var currentScore = {
        score: practiceScore,
        initals: playerInitials.value
    }

    console.log(currentScore)

    //getlocalStorageItem, new variable to hold value
    var highscores =
      JSON.parse(window.localStorage.getItem("hi-scr-lst")) || [];

      //adding the new player score
      highscores.push(currentScore);

      //combiming old and new players scores and adding them to storage
      localstorage.setItem("hi-scr-lst", JSON.stringify(highscores));
}

submitScoreBtn.onclick=savePlayerScoreInitials;



