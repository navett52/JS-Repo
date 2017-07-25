var tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // For the output:
    var message = '';

    if (task.value) {

        // TODO Add the item to the array:
        tasks.push(task.value);

        // Update the page with a new list
        message = '<h2>To-Do</h2><ol>';

        // TODO Iterate over the array and append to message a new message HTML list element for each array element
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        // TODO Set the output variable innerHTML to message
        output.innerHTML = message;
    }
    // Return false to prevent submission:
    return false;
}

// Initial setup:
function init() {
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;
