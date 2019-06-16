function toggleMondriaanLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  intro.className = currentClass == "mondriaan-mode" ? "light-mode" : "mondriaan-mode";
}

function toggleRembrandtLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  intro.className = currentClass == "rembrandt-mode" ? "light-mode" : "rembrandt-mode";
}

function toggleGoghLight() {
  var intro = document.getElementById("intro-text");
  var currentClass = intro.className;
  intro.className = currentClass == "gogh-mode" ? "light-mode" : "gogh-mode";
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
