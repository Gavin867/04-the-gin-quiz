// Need logic but out of time...


// getlocalStorageItem, new variable to hold value
var highscores =

    // Retrieve the data from the DOM
    JSON.parse(window.localStorage.getItem("high-score-list")) || [];

    console.log("high-scores-list" + highscores);

var ulElement = document.getElementById("list-scores");

// Can use < or "<= highscore.length -1;"
for (i = 0; i < highscores.length; i++) {

    var printScores = document.createElement("li");

    printScores.textContent = (highscores[i].initials + " - " + highscores[i].score);

    ulElement.append(printScores);

    console.log(highscores[i]);

}