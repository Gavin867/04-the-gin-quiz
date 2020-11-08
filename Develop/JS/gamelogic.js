// Define the global variables
var time = 75;
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
var displayCorrect = document.getElementById("correct");
var displayIncorrect = document.getElementById("incorrect");
var timeLeftelement = document.getElementById("timeLeft");
var playerScoreEl = document.getElementById("playerScore");
var revealInputPage = document.getElementById("storeScore");
var submitScoreBtn = document.getElementById("submitInitials");
var timerInterval; 


// Define Questions (Array of Objects)
var questionsList = [{
    question: "RECIPE: 1.5 oz London dry gin, 1.5 oz Dry Vermouth, 2 drops orange bitters, stir with ice, strain into cocktail glass, express lemon peel over beverage, garnish with olive or lemon twist.",
    answers: ["a. Tom Collins", "b. Gimlet", "c. Martini", "d. Aviation"],
    correctAnswer: "c. Martini"
}, {
    question: "RECIPE: 2 oz London dry gin, 1 oz Lemon Juice, 3/4 oz simple syrup, build in a highball glass with ice, stir, top off with club soda and garnish with lemon wheel.",
    answers: ["a. Box Car", "b. Corpse Reviver No.2", "c. Gin Fizz", "d. Tom Collins"],
    correctAnswer: "d. Tom Collins"
}, {
    question: "RECIPE: 2 oz gin, 1/2 tsp Creme de Violette, 1/2 oz maraschino liqueur, 3/4 oz lemon juice, 1/4 oz simple syrup, shake with ice and strain into a coupe glass, garnish with brandied cherry.",
    answers: ["a. French 75", "b. Aviation", "c. Devel's Own", "d. Overhead Smash"],
    correctAnswer: "b. Aviation"
}, {
    question: "RECIPE: 1.5 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari, stir with ice and strain into a double rocks glass, garnish with orange twist.",
    answers: ["a. Negroni", "b. Gonzalez", "c. Bee's Knees", "d. Gin Rickey"],
    correctAnswer: "a. Negroni"
}, {
    question: "RECIPE: 2 oz gin, 1.5 oz lime cordial, shake with ice and strain into a cocktail glass, garnish wtih lime wedge.",
    answers: ["a. Gimlet", "b. Zelli's Special", "c. Mortal Enemy", "d. Bitter French"],
    correctAnswer: "a. Gimlet"
}, {
	question: "RECIPE: Three measures of Gordon's, one of vodka, half a measure of Kina Lillet. Shake it very well unitl it's ice-cold, then add a large, thin slice of lemon peel.",
    answers: ["a. Celine Fizz", "b. Strange Brew", "c. Martini", "d. Vesper"],
    correctAnswer: "d. Vesper"
}, {
	question: "RECIPE: 1.5 oz London dry gin, 1/2 oz orange liqueur, 3/4 oz lime juice, 1 tsp grenadine, shake with ice and strain into a cocktail glass.",
    answers: ["a. Box Car", "b. Heart-Shaped Box", "c. Hyde Park Swizzle", "d. Le Bateleur"],
    correctAnswer: "a. Box Car"
}, {
	question: "RECIPE: 1.5 oz London dry gin, 3/4 oz lemon juice, 2 tsp simple syrup, shake with ice and strain into a flute, top with chilled champagne.",
    answers: ["a. Ace Cocktail", "b. French 75", "c. The Commandant", "d. Monk's Respite"],
    correctAnswer: "b. French 75"
}, {
	question: "RECIPE: 2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz simple syrup, egg white, shake with ice and strain into highball glass, top with club soda.",
    answers: ["a. Petticoat", "b. Tom Collins", "c. Gin Fizz", "d. Alembic"],
    correctAnswer: "c. Gin Fizz"
}, {
	question: "RECIPE: 3/4 oz London dry gin, 2 dashes absinthe, 3/4 oz Lillet Blanc, 3/4 oz cointreau, 3/4 oz lemon juice, shake with ice, strain into coupe glass.",
    answers: ["a. Summer Shack", "b. The Bloodbath", "c. Corpse Reviver No.1", "d. Corpse Reviver No.2"],
    correctAnswer: "d. Corpse Reviver No.2"
}, {
	question: "RECIPE: 2 oz London dry gin, 1oz lime juice, 1/2 oz simple syrup, shake with ice, strain into highball glass filled with ice, top with club soda, garnish with lime wedge.",
    answers: ["a. Bramble", "b. Mortal Enemy", "c. Gin Rickey", "d. Tailspin"],
    correctAnswer: "c. Gin Rickey"
}, {
	question: "RECIPE: 2 oz London dry gin, 1 tsp to 1 oz water (to taste), 1 tsp granulated sugar, combine in rocks glass, stir until sugar dissolved, add one large ice cube.",
    answers: ["a. Gin Sling (standard)", "b. Singapore Sling", "c. Black Market Sling", "d. Pillow Talk"],
    correctAnswer: "a. Gin Sling (standard)"
}, {
	question: "RECIPE: 2 oz London dry gin, 1 tsp Creme de Mure, 1 tsp maraschino liqueur, 1/2 oz lime juice, 3/4 oz grapefruit juice, 1 tsp simple syrup, shake with ice and strain into a coupe glass.",
    answers: ["a. Pink Flag", "b. Pink Elephant", "c. Pink Lady", "d. Sherry Berry Bramble"],
    correctAnswer: "b. Pink Elephant" 
}, {
	question: "RECIPE: 2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz honey syrup, 3 drops lavender bitters, shake with ice and strain into a coupe glass, garnish with brandied cherry.",
    answers: ["a. Bottany of Desire", "b. Tea's Knees", "c. Bee's Knees", "d. Fog Cutter"],
    correctAnswer: "c. Bee's Knees"
}, {
	question: "RECIPE: 1 oz London dry gin, 1/2 oz cognac, 1/2 oz sweet vermouth, 1/2 oz dry vermouth, 2 dashes aromatic bitters, stir with ice and strain into a cocktail glass, express lemon peel over beverage.",
    answers: ["a. Frisco Club", "b. Queen Palm", "c. Delmonico No.2", "d. Delmonico No.1"],
    correctAnswer: "d. Delmonico No.1"
}];

// When the user starts the quiz the following will happen
function startTheQuiz(event) {
    
    // Console registers the button click
    console.log("button-click");

    // Sets the 'hide' attribute to the instructionPage to render it invisible 
    instructionsPageEl.setAttribute("class", "hide");

    // Removes the 'hide' attribute to the quiz questions to make them visible
    revealQuiz.removeAttribute("class");

    // Sets the css styling to the questions
    revealQuiz.setAttribute("class", "question-container ");
    
    // Display questions
    displayQuestions();
    
    // Begin the countdown on the timer
    timerInterval=setInterval(beginCountDown, 1000)
}

// The countdown timer functionality
function beginCountDown() {

    // Countdown by the interval indentified in timerInterval
    time--

    // Display time left as a text value in the timer element of the html
    timeLeftelement.textContent=time

    // When the time runs out (i.e. reaches zero) do the following...
    if (time<=0) {

        playerScoreEl.textContent= score + "/" + questionsList.length;

        // Remove the 'hide' css class to display the store score page
        storeScore.removeAttribute("class");

        // Apply the css styling to the store score page
        storeScore.setAttribute("class", "store-container");
        
        // Clear the timer
        clearInterval(timerInterval);
        
        // Reapply 'hide' css class to make the quiz section invisible
        revealQuiz.setAttribute("class", "hide")
    }
}

// Tie the function which starts the quiz with the click event of the startButton
startButton.onclick = startTheQuiz

// Function to display the list of questions
function displayQuestions() {

    // Define the current question as the question the question highlighted by the index "pointer"
    var currentQuestion = questionsList[currentQuestionIndex];

    // Log the question selected from the array for display in console
    console.log(currentQuestion);

    // Render selected question to question element in the html
    questionDiv.textContent = currentQuestion.question;

    // Render corresponding question answers to buttons based on index
    answerAbutton.textContent = currentQuestion.answers[0];
    answerBbutton.textContent = currentQuestion.answers[1];
    answerCbutton.textContent = currentQuestion.answers[2];
    answerDbutton.textContent = currentQuestion.answers[3];

    // // // Onclick event checkAnswer
    answerAbutton.onclick = checkAnswer;
    answerBbutton.onclick = checkAnswer;
    answerCbutton.onclick = checkAnswer;
    answerDbutton.onclick = checkAnswer;

    // Log player response in the console
    console.log(answerAbutton.onclick);
}

//Check answer function
function checkAnswer() {
    console.log("user choice", this.textContent);

    // clicked button logs correspending currentQuestion.aswer value as userChoice
    if (this.textContent !== questionsList[currentQuestionIndex].correctAnswer) {
        // Show that the answer is incorrect in the console
        console.log("Incorrect Answer")
    
        // removeAtrribute("class") to reveal "incorrect" message
        displayIncorrect.removeAttribute("class");

        // Add css styling to message
        displayIncorrect.setAttribute("class", "response");

        // Message becomes hidden again after 1 second
        setTimeout(()=> {
            displayIncorrect.setAttribute("class", "hide")
        }, 500);

        // Subtract 10 second time penalty from time remaining
        time=time-10;

        // Show message indicating the time penalty
        console.log("-10 Second Time Penalty!")

        // Show current player score in the console
        console.log(score);
    }

    else if (this.textContent === questionsList[currentQuestionIndex].correctAnswer) {   
        // Show that the answer is correct in the console
        console.log("Correct Answer")
        
        // removeAtrribute("class") to reveal "correct" message
        displayCorrect.removeAttribute("class");

        // Add css styling to message
        displayCorrect.setAttribute("class", "response");

        // Message becomes hidden again after 1 second
        setTimeout(()=> {
            displayCorrect.setAttribute("class", "hide")
        }, 500);
        
        // Add a point to the score
        score++;

        // Show current player score in the console
        console.log(score);
    }

    // Move to next question
    currentQuestionIndex++;
    displayQuestions();
}

//Create a function to store intials and score
function savePlayerScoreInitials(event) {

    // Prevent he page from refreshing and losing the data
    event.preventDefault();

    // //display player's score
    // playerScoreEl.textContent= score + "/" + questionsList.length;

    // Register the button click
    console.log("button-click");

    // Create a variable to use the input initials
    var playerInitials=document.getElementById("initialsForm");

    // Log the form value for dislpay
    console.log(playerInitials.value);

    // Display the player's score
    var currentScore = {
        score: score,
        initals: playerInitials.value
    }

    console.log(currentScore)

    // getlocalStorageItem, new variable to hold value
    var highscores =

      // Retrieve the data from the DOM
      JSON.parse(window.localStorage.getItem("high-score-list")) || [];
      
      //adding the new player score
      highscores.push(currentScore);
      
      //combiming old and new players scores and adding them to storage
      window.localStorage.setItem("high-score-list", JSON.stringify(highscores));
}

// Connect the savePlayerScoreInitials function to a click event
submitScoreBtn.onclick=savePlayerScoreInitials;





