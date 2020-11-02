//The timer

var time = 0;



//Create a start quiz button


//Create a timer function that is activated when the start quiz button is clicked

    //Create a function to take wrong answers and subtract 10 seconds

//Create text modifier for the questions

//Create text modifier for the answer options

var questions = [{
    question: "Name that cocktail: 1.5 oz London Dry Gin, 1.5 oz Dry Vermouth, 2 drops West Indian Orange Bitters, stir with ice, strain into cocktail glass, express lemon peel over beverage, garnish with olive or lemon twist",
    answers: ["Tom Collins", "Gimlet", "Martini", "Aviation"],
    correctAnswer: 2
}, {
    question: "Name that cocktail: 2 oz London Dry Gin, 1 oz Lemon Juice, 3/4 oz Simple Syrup, build in a highball glass with ice, stir, top off with club soda and garnish with lemon slice",
    answers: ["Box Car", "Corpse Reviver No.2", "Gin Fizz", "Tom Collins"],
    correctAnswer: 3
}, {
    question: "Name that cocktail: 2 oz Gin, 1/2 tsp Creme de Violette, 1/2 oz Maraschino Liqueur, 3/4 oz lemon juice, 1/4 oz simple syrup, shake with ice and strain into a coupe glass, garnish with brandied cherry",
    answers: ["French 75", "Aviation", "Devel's Own", "Overhead Smash"],
    correctAnswer: 1
}, {
    question: "Name that cocktail: 1.5 oz London Dry Gin, 1 oz Sweet Vermouth, 1 oz Campari, stir with ice and strain into a double rocks glass, garnish with orange twist",
    answers: ["Negroni", "Gonzalez", "Bee's Knees", "Gin Rickey"],
    correctAnswer: 0
}, {
    question: "Name that cocktail: 2 oz Gin, 1.5 oz Lime Cordial, shake with ice and strain into a cocktail glass, garnish wtih lime wedge",
    answers: ["Gimlet", "", "", ""],
    correctAnswer: 0
}, {
	question: "Name that cocktail: ",
    answers: ["", "", "", "Vesper"],
    correctAnswer: 3
}, {
	question: "Name that cocktail: ",
    answers: ["Box Car", "", "", ""],
    correctAnswer: 0
}, {
	question: "Name that cocktail: ",
    answers: ["", "French 75", "", ""],
    correctAnswer: 1
}, {
	question: "Name that cocktail: ",
    answers: ["", "", "Gin Fizz", ""],
    correctAnswer: 2
}, {
	question: "Name that cocktail:",
    answers: ["", "", "", "Corpse Reviver No.2"],
    correctAnswer: 3
}, {
	question: "Name that cocktail: ",
    answers: ["", "", "", ""],
    correctAnswer: 1
}, {
	question: "Name that cocktail:",
    answers: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "Name that cocktail: ",
    answers: ["", "", "", ""],
    correctAnswer: 1
}, {
	question: "Name that cocktail:",
    answers: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "Name that cocktail:",
    answers: ["", "", "", ""],
    correctAnswer: 0
}];

//Create buttons for questions

//Create a function to count correct answers








var practiceScore = 75



var submitScoreBtn=document.getElementById("submitInitials");

function savePlayerScoreInitials(event) {
    event.preventDefault ();

    console.log("button-click");

    var playerInitials=document.getElementById("initialsForm");
    
    console.log(playerInitials.value);

    var currentScore = {
        score: practiceScore,
        initals: playerInitials.value
    }

    console.log(currentScore)

    //getlocalStorageItem, new variable to hold value
    var highscores =
      JSON.parse(window.localStorage.getItem("high-score-list")) || [];

      //adding the new player score
      highscores.push(currentScore);

      //combiming old and new players scores and adding them to storage
      localstorage.setItem("high-score-list", JSON.stringify(highscores));
}

submitScoreBtn.onclick=savePlayerScoreInitials;



