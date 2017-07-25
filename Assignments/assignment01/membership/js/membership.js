// membership.js
// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost = 0;

    // Get a reference to the form elements:
    var type = document.getElementById("type");
    var years = document.getElementById("years");

    //document.getElementById('cost').value = type;
    // TODO Convert the year to a number:
    //years = +document.getElementById('years').innerText;
    // Check for valid data:
    if (type && type.value && years && (years > 0)) {

        // TODO Add a switch statement to determine the base cost using the value of "type"
        switch (type) {

            case "basic":
                cost = 10;
                break;

            case "premium":
                cost = 15;
                break;

            case "gold":
                cost = 20;
                break;

            case "platinum":
                cost = 25;
                break;
        }

        // TODO Update cost to factor in the number of years:
        cost = cost * years;

        // Discount multiple years:
        if (years > 1) {
            cost *= .80; // 80%
        }

        var costElement = document.getElementById("cost");

        // TODO update the value property of 'costElement' to the calculated cost
        costElement.value = cost;
        //document.getElementById('cost').value = cost;
    } else { // Show an error:
        document.getElementById("cost").value = "Please enter valid values.";
    }

    // Return false to prevent submission:
    return false;
}

function init() {
    'use strict';
    // call a function named calculate() when form submitted
    document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;