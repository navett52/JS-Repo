/**
 * Created by tellepet on 9/1/2016.
 */
function validateForm() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    //Validate the info!!!
    if ((email.value.length > 0) && (password.value.length > 0)) {
        return true;
    } else {
        alert('Please complete the form!');
        return false;
    }
}

//Function called when the window has been loaded
//Function needs to add an event listener to the form.
function init() {
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }
}

//Assign an event listener to the window's load event:
window.onload = init;