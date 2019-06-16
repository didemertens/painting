function toggleMondriaanLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factMondriaan = document.getElementById("fact-Mondriaan");
  var factsPainter = document.getElementsByClassName("facts-painter");
  intro.className = currentClass == "mondriaan-mode" ? "light-mode" : "mondriaan-mode";

  var i;
  for (i = 0; i < factsPainter.length; i++) {
    factsPainter[i].style.display = "none";
  }
  factMondriaan.style.display = "block";

}

function toggleRembrandtLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factRembrandt = document.getElementById("fact-Rembrandt");
  var factsPainter = document.getElementsByClassName("facts-painter");
  intro.className = currentClass == "rembrandt-mode" ? "light-mode" : "rembrandt-mode";

  var i;
  for (i = 0; i < factsPainter.length; i++) {
    factsPainter[i].style.display = "none";
  }
  factRembrandt.style.display = "block";
}

function toggleGoghLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factGogh = document.getElementById("fact-Gogh");
  var factsPainter = document.getElementsByClassName("facts-painter");
  intro.className = currentClass == "gogh-mode" ? "light-mode" : "gogh-mode";

  var i;
  for (i = 0; i < factsPainter.length; i++) {
    factsPainter[i].style.display = "none";
  }
  factGogh.style.display = "block";
}

function LightMode() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factsPainter = document.getElementsByClassName("facts-painter");
  intro.className = "light-mode";

  var i;
  for (i = 0; i < factsPainter.length; i++) {
    factsPainter[i].style.display = "none";
  }
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
