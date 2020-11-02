//The timer

var time = 0;



//Create a start quiz button


//Create a timer function that is activated when the start quiz button is clicked

    //Create a function to take wrong answers and subtract 10 seconds

//Create text modifier for the questions

//Create text modifier for the answer options

var questions = [{
    question: "The recipe: 1.5 oz London Dry Gin, 1.5 oz Dry Vermouth, 2 drops orange bitters, stir with ice, strain into cocktail glass, express lemon peel over beverage, garnish with olive or lemon twist",
    answers: ["Tom Collins", "Gimlet", "Martini", "Aviation"],
    correctAnswer: 2
    // Correct answer: Martini
}, {
    question: "The recipe: 2 oz London dry gin, 1 oz Lemon Juice, 3/4 oz simple syrup, build in a highball glass with ice, stir, top off with club soda and garnish with lemon wheel",
    answers: ["Box Car", "Corpse Reviver No.2", "Gin Fizz", "Tom Collins"],
    correctAnswer: 3
    // Correct answer: Tom Collins
}, {
    question: "The recipe: 2 oz Gin, 1/2 tsp Creme de Violette, 1/2 oz maraschino liqueur, 3/4 oz lemon juice, 1/4 oz simple syrup, shake with ice and strain into a coupe glass, garnish with brandied cherry",
    answers: ["French 75", "Aviation", "Devel's Own", "Overhead Smash"],
    correctAnswer: 1
    // Correct answer: Aviation
}, {
    question: "The recipe: 1.5 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari, stir with ice and strain into a double rocks glass, garnish with orange twist",
    answers: ["Negroni", "Gonzalez", "Bee's Knees", "Gin Rickey"],
    correctAnswer: 0
    // Correct answer: Negroni
}, {
    question: "The recipe: 2 oz gin, 1.5 oz lime cordial, shake with ice and strain into a cocktail glass, garnish wtih lime wedge",
    answers: ["Gimlet", "Zelli's Special", "Mortal Enemy", "Bitter French"],
    correctAnswer: 0
    // Correct answer: Gimlet
}, {
	question: "'Three measures of Gordon's, one of vodka, half a measure of Kina Lillet. Shake it very well unitl it's ice-cold, then add a large, thin slice of lemon peel.'",
    answers: ["Celine Fizz", "Strange Brew", "Martini", "Vesper"],
    correctAnswer: 3
    // Correct answer: Vesper
}, {
	question: "The recipe: 1.5 oz London dry gin, 1/2 oz orange liqueur, 3/4 oz lime juice, 1 tsp grenadine, shake with ice and strain into a cocktail glass",
    answers: ["Box Car", "Heart-Shaped Box", "Hyde Park Swizzle", "Le Bateleur"],
    correctAnswer: 0
    // Correct answer: Box Car
}, {
	question: "The recipe: 1.5 oz London dry gin, 3/4 oz lemon juice, 2 tsp simple syrup, shake with ice and strain into a flute, top with chilled champagne",
    answers: ["Ace Cocktail", "French 75", "The Commandant", "Monk's Respite"],
    correctAnswer: 1
    // Correct answer: French 75
}, {
	question: "The recipe: 2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz simple syrup, egg white, shake with ice and strain into highball glass, top with club soda",
    answers: ["Petticoat", "Tom Collins", "Gin Fizz", "Alembic"],
    correctAnswer: 2
    // Correct answer: Gin Fizz
}, {
	question: "The recipe: 3/4 oz London dry gin, 2 dashes absinthe, 3/4 oz Lillet Blanc, 3/4 oz cointreau, 3/4 oz lemon juice, shake with ice, strain into coupe glass",
    answers: ["Summer Shack", "The Bloodbath", "Corpse Reviver No.1", "Corpse Reviver No.2"],
    correctAnswer: 3
    // Correct answer: Corpse Reviver No.2
}, {
	question: "The recipe: 2 oz London dry gin, 1oz lime juice, 1/2 oz simple syrup, shake with ice, strain into highball glass filled with ice, top with club soda, garnish with lime wedge",
    answers: ["Bramble", "Mortal Enemy", "Gin Rickey", "Tailspin"],
    correctAnswer: 2
    // Correct answer: Gin Rickey
}, {
	question: "The recipe: 2 oz London dry gin, 1 tsp to 1 oz water (to taste), 1 tsp granulated sugar, combine in rocks glass, stir until sugar dissolved, add one large ice cube",
    answers: ["Gin Sling (standard)", "Singapore Sling", "Black Market Sling", "Pillow Talk"],
    correctAnswer: 0
    // Corect answer: Gin Sling
}, {
	question: "The recipe: 2 oz London dry gin, 1 tsp Creme de Mure, 1 tsp maraschino liqueur, 1/2 oz lime juice, 3/4 oz grapefruit juice, 1 tsp simple syrup, shake with ice and strain into a coupe glass",
    answers: ["Pink Flag", "Pink Elephant", "Pink Lady", "Sherry Berry Bramble"],
    correctAnswer: 1 
    // Correct answer: Pink Elephant
}, {
	question: "The recipe: 2 oz London dry gin, 3/4 oz lemon juice, 3/4 oz honey syrup, 3 drops lavender bitters, shake with ice and strain into a coupe glass, garnish with brandied cherry",
    answers: ["Bottany of Desire", "Tea's Knees", "Bee's Knees", "Fog Cutter"],
    correctAnswer: 2
    // Correct answer: Bee's Knees
}, {
	question: "The recipe: 1 oz London dry gin, 1/2 oz cognac, 1/2 oz sweet vermouth, 1/2 oz dry vermouth, 2 dashes aromatic bitters, stir with ice and strain into a cocktail glass, express lemon peel over beverage",
    answers: ["Frisco Club", "Queen Palm", "Delmonico No.2", "Delmonico No.1"],
    correctAnswer: 3
    // Correct answer: Delmonico No.1
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



