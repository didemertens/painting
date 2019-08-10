// function to start the quiz
function startQuiz() {
  document.getElementById("quiz").classList.remove('hidden-quiz');
  var btnquiz = document.getElementById("start-quiz");
  btnquiz.style.display = "none";
}


// function to calculate the result of the quiz
function removePaintings() {
  var answers_paint;
  answers_paint = document.getElementById("answers").children;
  Array.from(answers_paint).forEach(function(element) {
    element.classList.add("painter-answer");
  });
}

function tabulateAnswers(event) {
  // initialize variables for each choice's scores
  event.preventDefault();
  let c1score = 0;
  let c2score = 0;
  let c3score = 0;
  let c4score = 0;

  // get a list of the radio inputs on the page
  const choices = document.getElementsByTagName('input');

  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
    }
  }

  // Find out which choice got the highest score.
  const maxscore = Math.max(c1score,c2score,c3score,c4score);

  // Display answer corresponding to that choice

  // function removePaintings() {
  //   var answers_paint;
  //   answers_paint = document.getElementById("answers").children;
  //   Array.from(answers_paint).forEach(function(element) {
  //     element.classList.add("painter-answer");
  //   });
  // }

  const answerbox = document.getElementById('answers');
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    removePaintings();
    document.getElementById("painter-answer-1").classList.remove('painter-answer');
  };
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    removePaintings();
    document.getElementById("painter-answer-2").classList.remove('painter-answer');
  };
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    removePaintings();
    document.getElementById("painter-answer-3").classList.remove('painter-answer');
  };
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    removePaintings();
    document.getElementById("painter-answer-4").classList.remove('painter-answer');
  };
}


// program the reset button
function resetAnswer() {
  const answerbox = document.getElementById('answer');
  removePaintings();
  answerbox.innerHTML = "Play again!";
}
