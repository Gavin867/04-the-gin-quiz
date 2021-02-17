// getlocalStorageItem, new variable to hold value
var highscores =

    // Retrieve the data from the DOM
    JSON.parse(window.localStorage.getItem("high-score-list")) || [];


// Create a variable that is tie to #list-scores
var ulElement = document.getElementById("list-scores");

// Create a variable tied to the clear button
var clearAllScoresButton = document.getElementById("clear-score-board");

// Log the list plus the highscores to display in the console
console.log("high-scores-list" + highscores);

// Create a for-loop to loop through the highscores that have been saved to local storage Can use < or "<= highscore.length -1;"
for (i = 0; i < highscores.length; i++) {

    // Create a variable which creates <li> elements in the list
    var printScores = document.createElement("li");

    // Use .textContent to create text context which desplays the initials and scores pieces of the currentScores object which has been placed in local storage
    printScores.textContent = (highscores[i].initials + " - " + highscores[i].score);

    // Append the printScores to the list
    ulElement.append(printScores);

    // Console log each integer (aka value created by running the loop)
    console.log(highscores[i]);
};

// Add functionality to the 'Clear All Scores' button
clearAllScoresButton.onclick = clearScores;

function clearScores() {

    // Clear the local storage
    window.localStorage.clear();

    // Remove the <ul> element from html
    ulElement.remove();
};
