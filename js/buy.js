var modelContainer = document.getElementById("gridmodel");
var modelChoice = modelContainer.getElementsByClassName("choice");
  for (var i = 0; i < modelChoice.length; i++) {
    modelChoice[i].addEventListener("click", function() {
    var modelcurrent = document.getElementsByClassName("selected");
    modelcurrent[0].className = modelcurrent[0].className.replace(" selected", "");
    this.className += " selected";
    });
}

var colorContainer = document.getElementById("gridcolor");
var colorChoice = colorContainer.getElementsByClassName("color-choice");
  for (var i = 0; i < colorChoice.length; i++) {
    colorChoice[i].addEventListener("click", function() {
    var colorcurrent = document.getElementsByClassName("selected");
    colorcurrent[0].className = colorcurrent[0].className.replace(" selected", "");
    this.className += " selected";
    });
}

var stockageContainer = document.getElementById("gridstockage");
var stockageChoice = stockageContainer.getElementsByClassName("color-choice");
  for (var i = 0; i < stockageChoice.length; i++) {
    stockageChoice[i].addEventListener("click", function() {
    var stockagecurrent = document.getElementsByClassName("selected");
    stockagecurrent[0].className = stockagecurrent[0].className.replace(" selected", "");
    this.className += " selected";
    });
}

var radinContainer = document.getElementById("gridradin");
var radinChoice = radinContainer.getElementsByClassName("yesno");
  for (var i = 0; i < radinChoice.length; i++) {
    radinChoice[i].addEventListener("click", function() {
    var radincurrent = document.getElementsByClassName("selected");
    radincurrent[0].className = radincurrent[0].className.replace(" selected", "");
    this.className += " selected";
    });
}