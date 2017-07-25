/**
 * Created by tellepet on 9/29/2016.
 */
document.addEventListener("click", addLogHandler, false);
function addLogHandler() {
    var log = document.getElementById("log");
    log.innerHTML += event.target.nodeName + " received click event.<br/>";
    console.log(event.currentTarget + event.target + event.type);
}

var ul = document.getElementById("tableOfContents");
ul.onclick = function(event) {
    alert(this.id + " has " + ul.childElementCount + " children.");
    event.stopPropagation();
};

document.addEventListener("mouseover", addHoverListener, false);
function addHoverListener(event) {
    var text = document.getElementById("comments");
    text.title = "Enter comments here.";
}

document.addEventListener("keyup", currentLength, false);
function currentLength(event) {
    var count = document.getElementById("count");
    count.value = document.getElementById("comments").value.length;
}

var body = document.body;
body.onblur = function(event) {
    document.title = "Blur";
}

body.onfocus = function(event) {
    document.title = "Focus";
}