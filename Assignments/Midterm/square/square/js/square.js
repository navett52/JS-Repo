//TODO add your code here
var button = document.getElementById("convertButton");
button.addEventListener('click', squareRoot);

function squareRoot() {
    document.getElementById("sqRoot").value = Math.sqrt(document.getElementById("value").value).toFixed(2);
}

function init() {
}
window.onload = init;