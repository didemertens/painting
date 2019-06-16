function toggleMondriaanLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factMondriaan = document.getElementById("fact-Mondriaan");
  intro.className = currentClass == "mondriaan-mode" ? "light-mode" : "mondriaan-mode";
  factMondriaan.style.display = "block";
}

function toggleRembrandtLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factRembrandt = document.getElementById("fact-Rembrandt");
  intro.className = currentClass == "rembrandt-mode" ? "light-mode" : "rembrandt-mode";
  factRembrandt.style.display = "block";
}

function toggleGoghLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  var factGogh = document.getElementById("fact-Gogh");
  intro.className = currentClass == "gogh-mode" ? "light-mode" : "gogh-mode";
  factGogh.style.display = "block";
}

function LightMode() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  intro.className = "light-mode";
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
