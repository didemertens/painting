// function to calculate the result of the quiz
function tabulateAnswers(event) {
  // initialize variables for each choice's scores
  event.preventDefault();
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');

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
  var maxscore = Math.max(c1score,c2score,c3score,c4score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You're painting of the day is Leonardo da Vinci's Lady with an Ermine." + "<br />" + "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_Lady_with_an_Ermine.jpg/1200px-The_Lady_with_an_Ermine.jpg\" width=\"400px\" height=\"500px\">";
  };
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You're painting of the day is Tamara de Lempicka's The Brilliance." + "<br />" + "<img src=\"https://www.passionforpaintings.com/69697/the-brilliance-1932-tamara-de-lempicka.jpg\" width=\"400px\" height=\"500px\">";
  };
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You're painting of the day is Franz Marc's Foxes." + "<br />" + "<img src=\"https://media.overstockart.com/optimized/cache/data/product_images/FM2501-1000x1000.jpg\" width=\"400px\" height=\"500px\">";
  };
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You're painting of the day is Claude Monet's Woman with Umbrella." + "<br />" + "<img src=\"https://imgc.artprintimages.com/img/print/femme-a-l-ombrelle-tournee-vers-la-gauche-woman-with-umbrella-1886_u-l-pi4fre0.jpg?h=550&w=550\" width=\"400px\" height=\"500px\">";
  };
}


// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Play again!";
}
