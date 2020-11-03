// Define the global variables
var time = 100;
var score = 0;
var currentQuestionIndex = 0
var instructionsPageEl = document.getElementById("instructionsPage");
var startButton = document.getElementById("startButton");
var revealQuiz = document.getElementById("theQuiz");
var questionDiv = document.getElementById("question");
var answerAbutton = document.getElementById("answerA");
var answerBbutton = document.getElementById("answerB");
var answerCbutton = document.getElementById("answerC");
var answerDbutton = document.getElementById("answerD");
var timeLeftelement = document.getElementById("timeLeft");
var revealInputPage = document.getElementById("storeScore");
var submitScoreBtn=document.getElementById("submitInitials");
var timerInterval; 


// Define Questions (Array of Objects)
var questionsList = [{
    question: "1.5 oz London Dry Gin, 1.5 oz Dry Vermouth, 2 drops orange bitters, stir with ice, strain into cocktail glass, express lemon peel over beverage, garnish with olive or lemon twist",
    answers: ["a. Tom Collins", "b. Gimlet", "c. Martini", "d. Aviation"],
    correctAnswer: 2
    // Correct answer: Martini
}, {
    question: "2 oz London dry gin, 1 oz Lemon Juice, 3/4 oz simple syrup, build in a highball glass with ice, stir, top off with club soda and garnish with lemon wheel",
    answers: ["a. Box Car", "b. Corpse Reviver No.2", "c. Gin Fizz", "d. Tom Collins"],
    correctAnswer: 3
    // Correct answer: Tom Collins
}, {
    question: "2 oz gin, 1/2 tsp Creme de Violette, 1/2 oz maraschino liqueur, 3/4 oz lemon juice, 1/4 oz simple syrup, shake with ice and strain into a coupe glass, garnish with brandied cherry",
    answers: ["a. French 75", "b. Aviation", "c. Devel's Own", "d. Overhead Smash"],
    correctAnswer: 1
    // Correct answer: Aviation
}, {
    question: "1.5 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari, stir with ice and strain into a double rocks glass, garnish with orange twist",
    answers: ["a. Negroni", "b. Gonzalez", "c. Bee's Knees", "d. Gin Rickey"],
    correctAnswer: 0
    // Correct answer: Negroni
}, {
    question: "2 oz gin, 1.5 oz lime cordial, shake with ice and strain into a cocktail glass, garnish wtih lime wedge",
    answers: ["a. Gimlet", "b. Zelli's Special", "c. Mortal Enemy", "d. Bitter French"],
    correctAnswer: 0
    // Correct answer: Gimlet
}, {
	question: "'Three measures of Gordon's, one of vodka, half a measure of Kina Lillet. Shake it very well unitl it's ice-cold, then add a large, thin slice of lemon peel.'",
    answers: ["a. Celine Fizz", "b. Strange Brew", "c. Martini", "d. Vesper"],
    correctAnswer: 3
    // Correct answer: Vesper
}, {
	question: "1.5 oz London dry gin, 1/2 oz orange liqueur, 3/4 oz lime juice, 1 tsp grenadine, shake with ice and strain into a cocktail glass",
    answers: ["a. Box Car", "b. Heart-Shaped Box", "c. Hyde Park Swizzle", "d. Le Bateleur"],
    correctAnswer: 0
    // Correct answer: Box Car
}, {
	question: "1.5 oz London dry gin, 3/4 oz lemon juice, 2 tsp simple syrup, shake with ice and strain into a flute, top with chilled champagne",
    answers: ["a. Ace Cocktail", "b. French 75", "c. The Commandant", "d. Monk's Respite"],
    correctAnswer: 1
    // Correct answer: French 75
}, {
	question: "2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz simple syrup, egg white, shake with ice and strain into highball glass, top with club soda",
    answers: ["a. Petticoat", "b. Tom Collins", "c. Gin Fizz", "d. Alembic"],
    correctAnswer: 2
    // Correct answer: Gin Fizz
}, {
	question: "3/4 oz London dry gin, 2 dashes absinthe, 3/4 oz Lillet Blanc, 3/4 oz cointreau, 3/4 oz lemon juice, shake with ice, strain into coupe glass",
    answers: ["a. Summer Shack", "b. The Bloodbath", "c. Corpse Reviver No.1", "d. Corpse Reviver No.2"],
    correctAnswer: 3
    // Correct answer: Corpse Reviver No.2
}, {
	question: "2 oz London dry gin, 1oz lime juice, 1/2 oz simple syrup, shake with ice, strain into highball glass filled with ice, top with club soda, garnish with lime wedge",
    answers: ["a. Bramble", "b. Mortal Enemy", "c. Gin Rickey", "d. Tailspin"],
    correctAnswer: 2
    // Correct answer: Gin Rickey
}, {
	question: "2 oz London dry gin, 1 tsp to 1 oz water (to taste), 1 tsp granulated sugar, combine in rocks glass, stir until sugar dissolved, add one large ice cube",
    answers: ["a. Gin Sling (standard)", "b. Singapore Sling", "c. Black Market Sling", "d. Pillow Talk"],
    correctAnswer: 0
    // Corect answer: Gin Sling
}, {
	question: "2 oz London dry gin, 1 tsp Creme de Mure, 1 tsp maraschino liqueur, 1/2 oz lime juice, 3/4 oz grapefruit juice, 1 tsp simple syrup, shake with ice and strain into a coupe glass",
    answers: ["a. Pink Flag", "b. Pink Elephant", "c. Pink Lady", "d. Sherry Berry Bramble"],
    correctAnswer: 1 
    // Correct answer: Pink Elephant
}, {
	question: "2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz honey syrup, 3 drops lavender bitters, shake with ice and strain into a coupe glass, garnish with brandied cherry",
    answers: ["a. Bottany of Desire", "b. Tea's Knees", "c. Bee's Knees", "d. Fog Cutter"],
    correctAnswer: 2
    // Correct answer: Bee's Knees
}, {
	question: "1 oz London dry gin, 1/2 oz cognac, 1/2 oz sweet vermouth, 1/2 oz dry vermouth, 2 dashes aromatic bitters, stir with ice and strain into a cocktail glass, express lemon peel over beverage",
    answers: ["a. Frisco Club", "b. Queen Palm", "c. Delmonico No.2", "d. Delmonico No.1"],
    correctAnswer: 3
    // Correct answer: Delmonico No.1
}];

// Add functionality to the 'Start the Quiz' button
function startTheQuiz(event) {
    
    // Console registers the button click
    console.log("button-click");

    // Sets the 'hide' attribute to the instructionPage to render it invisible 
    instructionsPageEl.setAttribute("class", "hide");

    // Removes the 'hide' attribute to the quiz questions to make them visible
    revealQuiz.removeAttribute("class");

    // Sets the css styling to the questions
    revealQuiz.setAttribute("class", "container");
    
    // Display questions
    displayQuestions();
    
    // Begin the countdown on the timer
    timerInterval=setInterval(beginCountDown, 1000)
}

//Starts the countdown timer functionality
function beginCountDown() {
    time--
    timeLeftelement.textContent=time

    if (time<=0) {
        storeScore.removeAttribute("class");
        storeScore.setAttribute("class", "container");
        //Stops timer at zero
        clearInterval(timerInterval);
        revealQuiz.setAttribute("class", "hide")
    }
}

startButton.onclick = startTheQuiz

function displayQuestions() {
    var currentQuestion = questionsList[currentQuestionIndex];
    console.log(currentQuestion);
    questionDiv.textContent = currentQuestion.question;
    answerAbutton.textContent = currentQuestion.answers[0];
    answerBbutton.textContent = currentQuestion.answers[1];
    answerCbutton.textContent = currentQuestion.answers[2];
    answerDbutton.textContent = currentQuestion.answers[3];

    //onclick event checkAnswer
    answerAbutton.onclick = checkAnswer;
    answerBbutton.onclick = checkAnswer;
    answerCbutton.onclick = checkAnswer;
    answerDbutton.onclick = checkAnswer;
}

//Check answer function
function checkAnswer() {
    //If buttonclick = correctAnswer score ++

    //else time--10sec

    // Move to next question
    currentQuestionIndex++;
    displayQuestions();
}





//Create text modifier for the answer options



//Create buttons for questions

//Create a function to count correct answers

function savePlayerScoreInitials(event) {
    event.preventDefault();
    console.log("button-click");
    var playerInitials=document.getElementById("initialsForm");
    console.log(playerInitials.value);
    var currentScore = {
        score: score,
        initals: playerInitials.value
    }

    console.log(currentScore)

    //getlocalStorageItem, new variable to hold value
    var highscores =
      JSON.parse(window.localStorage.getItem("high-score-list")) || [];
      //adding the new player score
      highscores.push(currentScore);
      //combiming old and new players scores and adding them to storage
      window.localstorage.setItem("high-score-list", JSON.stringify(highscores));
}

submitScoreBtn.onclick=savePlayerScoreInitials;





