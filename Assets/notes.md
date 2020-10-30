Helpful Hints from Anthony
* setInterval for the timer

* clearInterval to stop the timeout

* VAR currentScore/timeLeft.

* VAR questions -Array

* VAR pointer/index - Current position in the question array

* VAR startButton

```
var questions = [ 
    {
    "what is your favorite color?"
    // Questions text
    // List of question choices
    // Correct Answer
    answer: "correct"
    }
]
```



WHEN I lick the "start button"
```
function startGame() {

}
```
'start button' .addEventListener("click,function() {})

Then a timer starts and I am presented with a question

* set starting score 75

* Start the interval to begin the score countdown

* present the question = Create new HTML elements for my question content

    > Set the #question div innerHTML = "";
    > Append an H2 for the question text
    > Append a new button for each question

    > var button = document.createElement("button")
    > button.textContent = questionText
    > button.setAttribute("data-choice", questionText);
        Note: to the right of the "data-" is the variable name you are referencing it to

WHEN I answer a question

* WHEN the use clicks one of my buttons

THEN I am presented with another question

* Increae our pointer by 1

* Present the next question

WHEN I answer a question incorrectly

    event.target.matches("button")

    > var clickButtonContent = event.target.textContent;
    > var clickButtonContent = event.target.getAttribute("data-choice", questionText):

    > The question is correct with clickButtonValue = questions[pointer].answer

THEN time is subtracted from the clock

    > Subtract points from my current score.

WHEN all questions are answered or the timer reaches 0
THEN the game is over

    > 

WHEN the game is over
THEN I can save my initials and score
