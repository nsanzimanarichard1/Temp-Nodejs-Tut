document.addEventListener('DOMContentLoaded', () => {
    // Get reference to the form and its elements
    const editTaskForm = document.getElementById('edit-task-form');
    const taskIdInput = document.getElementById('task-id');
    const taskNameInput = document.getElementById('task-name');
    const completedCheckbox = document.getElementById('completed');

    // Event listener for form submission
    editTaskForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract form data
        const taskId = taskIdInput.value;
        const taskName = taskNameInput.value;
        const completed = completedCheckbox.checked;

        try {
            // Send a PATCH request to update the task
            const response = await axios.patch(`/api/v1/tasks/${taskId}`, {
                name: taskName,
                completed: completed
            });

            // Display a success message to the user
            alert('Task updated successfully');
            // Redirect the user to the home page or update the task list as needed
        } catch (error) {
            // Display an error message to the user
            alert('An error occurred while updating the task. Please try again later.');
            console.error(error);
        }
    });
});
