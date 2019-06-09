function toggleMondriaanLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "mondriaan-mode" ? "light-mode" : "mondriaan-mode";
}

function toggleRembrandtLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "rembrandt-mode" ? "light-mode" : "rembrandt-mode";
}

function toggleGoghLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "gogh-mode" ? "light-mode" : "gogh-mode";
}

function LightMode() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = "light-mode";
}
