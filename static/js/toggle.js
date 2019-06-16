function iterateFacts(){
  var factsPainter = document.getElementsByClassName("facts-painter");
  var i;
  for (i = 0; i < factsPainter.length; i++) {
    factsPainter[i].style.display = "none";
  }
}

function toggleMondriaanLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factMondriaan = document.getElementById("fact-Mondriaan");
  intro.className = "mondriaan-mode";
  iterateFacts();
  factMondriaan.style.display = "block";

}

function toggleRembrandtLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factRembrandt = document.getElementById("fact-Rembrandt");
  intro.className = "rembrandt-mode";
  iterateFacts();
  factRembrandt.style.display = "block";
}

function toggleGoghLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factGogh = document.getElementById("fact-Gogh");
  intro.className = "gogh-mode";
  iterateFacts();
  factGogh.style.display = "block";
}

function LightMode() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factsPainter = document.getElementsByClassName("facts-painter");
  intro.className = "light-mode";
  iterateFacts();
}


function HideBtn() {
  var intro = document.getElementById("intro-text");
  var closeBtn = document.getElementById("close-btn");
  var currentClass = intro.className;
  if (currentClass === "dark-mode" || currentClass === "light-mode"){
    closeBtn.style.visibility = 'hidden';
  } else{
    closeBtn.style.visibility = 'visible';
  }
}

HideBtn();
