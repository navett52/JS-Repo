/**
 * Created by Evan Tellep on 10/27/2016.
 */
//Grabbing the left and right divs by ID
var left = document.getElementById('left');
var right = document.getElementById('right');
//Creating an images array to hold the names of the images in the folder
var images = ["bookandquillIcon.png", "diamondIcon.png", "endportalIcon.png", "grassIcon.png", "mapIcon.png",
                "MCBackground.png", "MCDay.png", "MCNight.png", "redstoneIcon.png"];
//setting a count variable to be used to make sure I don't go out of the array bounds
var i = 0;
//Moves 1 picture left if able
function moveLeft() {
    if (i > 0) {
        i--;
        document.getElementById('image').src = 'images/' + images[i];
    }
}
//moves one picture right if able
function moveRight() {
    if (8 > i) {
        i++;
        document.getElementById('image').src = 'images/' + images[i];
    }
}
//Creating the listeners and setting the gallery to the first picture on page load
function init() {
    left.addEventListener("click", moveLeft, false);
    right.addEventListener("click", moveRight, false);
    document.getElementById('image').src = 'images/' + images[i];
}
window.onload = init;