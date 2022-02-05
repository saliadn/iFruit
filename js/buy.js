let modelContainer = document.getElementById("gridmodel");
let modelChoice = modelContainer.getElementsByClassName("choice");
  for (let i = 0; i < modelChoice.length; i++) {
    modelChoice[i].addEventListener("click", function() {
    let modelcurrent = document.getElementsByClassName("selected");
    modelcurrent[0].className = modelcurrent[0].className.replace(" selected", "");
    this.className += " selected";
    });
}

// let colorContainer = document.getElementById("gridcolor");
// let colorChoice = colorContainer.getElementsByClassName("color-choice");
//   for (let j = 0; j < colorChoice.length; j++) {
//     colorChoice[j].addEventListener("click", function() {
//     let colorcurrent = document.getElementsByClassName("selected");
//     colorcurrent[0].className = colorcurrent[0].className.replace(" selected", "");
//     this.className += " selected";
//     });
// }

// var stockageContainer = document.getElementById("gridstockage");
// var stockageChoice = stockageContainer.getElementsByClassName("color-choice");
//   for (var i = 0; i < stockageChoice.length; i++) {
//     stockageChoice[i].addEventListener("click", function() {
//     var stockagecurrent = document.getElementsByClassName("selected");
//     stockagecurrent[0].className = stockagecurrent[0].className.replace(" selected", "");
//     this.className += " selected";
//     });
// }

// var radinContainer = document.getElementById("gridradin");
// var radinChoice = radinContainer.getElementsByClassName("yesno");
//   for (var i = 0; i < radinChoice.length; i++) {
//     radinChoice[i].addEventListener("click", function() {
//     var radincurrent = document.getElementsByClassName("selected");
//     radincurrent[0].className = radincurrent[0].className.replace(" selected", "");
//     this.className += " selected";
//     });
// }