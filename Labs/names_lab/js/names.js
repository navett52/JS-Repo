// This script concatenates two strings together to format a name.

// Function called when the form is submitted.
// Function formats the text and returns false.
function formatNames() {
	// TODO Declare a variable for storing the formatted name:
    var formattedName;
    // TODO Get a reference to the form values (hint: use document.getElementById)
	var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
	// TODO Create the formatted name:
	formattedName = lastName + ", " + firstName;
	// TODO Display the formatted name:
    document.getElementById("result").value = formattedName;
	// Return false to prevent submission:
	return false;
}

// Function needs to add an event listener to the form.
function init() {
   if (document && document.getElementById) {
      document.getElementById('theForm').onsubmit = formatNames;
   }
}

window.onload = init;
