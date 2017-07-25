// Function called when the form is submitted.
function validateForm(e) {
    'use strict';

    // Get form references:
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var zip = document.getElementById('zip');
	var terms = document.getElementById('terms');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		// TODO remove the error message
		removeErrorMessage('zip');
	} else {
		// TODO add the error message
		addErrorMessage('zip', 'Please enter your zip.');
		error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {
		// Prevent the form's submission:
        if (e.preventDefault) {
	        e.preventDefault();
        }
	    return false;
	}
}

// Function called when the terms checkbox changes.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = document.getElementById('submit');
	
	// TODO check if the terms checkbox is checked and enable submit if it is
	if (document.getElementById('terms').value) {

	}

}

function showToolTip(e) {
	e.target.previousSibling.lastChild.style.visibility = 'visible'
}

function hideToolTip(e) {
	// TODO hide the tool tip...do the inverse operation of the showToolTip function
	e.target.previousSibling.lastChild.style.visibility = 'hidden'
}

// Add error message to form element and set form label to CSS class error
function addErrorMessage(id, msg) {
	'use strict';

	// Get the form element reference:
	var elem = document.getElementById(id);

	// Define the new span's ID value:
	var newId = id + 'Error';

	// Check for the existence of the span:
	var span = document.getElementById(newId);
	if (span) {
		span.firstChild.value = msg; // Update
	} else { // Create new.

		// Create the span:
		span = document.createElement('span');
		span.id = newId;
		span.className = 'error';
		span.appendChild(document.createTextNode(msg));

		// Add the span to the parent:
		elem.parentNode.appendChild(span);

		// Set the label style class to error
		elem.previousSibling.className = 'error';
	}
}

// if present, remove error message from form element
function removeErrorMessage(id) {
	'use strict';

	// Get a reference to the span:
	var span = document.getElementById(id + 'Error');
	if (span) {

		// Remove the class from the label:
		span.previousSibling.previousSibling.className = null;

		// Remove the span:
		span.parentNode.removeChild(span);

	}
}

window.onload = function() {
	'use strict';

	// TODO register validateForm as a submit handler for the form

	// TODO disable the submit button

	// TODO add toggleSubmit as an change event handler on the terms checkbox

	// TODO enable tooltips on the phone number by registering mouseover, focus, mouseout and blur events
	// to use tooltip functions in this file
};

