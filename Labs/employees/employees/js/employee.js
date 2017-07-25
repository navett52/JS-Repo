// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var department = document.getElementById('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
    var employee = createEmployee(firstName, lastName, department);

    // Create the output as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    return false;
}

function createEmployee(fName, lName, dept) {
    return {
        firstName: fName,
        lastName: lName,
        department: dept,
        getName: function() {
            return lastName.value + ', ' + firstName.value;
        },
        hireDate: new Date()
    };
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
}
window.onload = init;