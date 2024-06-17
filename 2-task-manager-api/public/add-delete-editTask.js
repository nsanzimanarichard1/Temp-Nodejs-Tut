// 

// node application with axion api

// 

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const taskList = document.querySelector('.task-list');

    const addTask = async () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            try {
                const response = await axios.post('/api/v1/tasks', { name: taskText });
                const newTask = response.data.Task;
                const taskItem = createTaskItem(newTask._id, newTask.name);
                taskList.appendChild(taskItem);
                taskInput.value = '';
            } catch (error) {
                console.error(error);
                alert('Failed to add task');
            }
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`/api/v1/tasks/${taskId}`);
            document.getElementById(taskId).remove();
        } catch (error) {
            console.error(error);
            alert('Failed to delete task');
        }
    };

    const createTaskItem = (taskId, taskText) => {
        const taskItem = document.createElement('li');
        taskItem.id = taskId;
        taskItem.classList.add('task-item');

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskTextElement.classList.add('task-text');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-task-btn');
        deleteBtn.addEventListener('click', () => deleteTask(taskId));

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);

        return taskItem;
    };

    addTaskBtn.addEventListener('click', addTask);

    const fetchAndDisplayTasks = async () => {
        try {
            const response = await axios.get('/api/v1/tasks');
            const tasks = response.data.getTasks;
            tasks.forEach(task => {
                const taskItem = createTaskItem(task._id, task.name);
                taskList.appendChild(taskItem);
            });
        } catch (error) {
            console.error(error);
            alert('Failed to fetch tasks');
        }
    };

    fetchAndDisplayTasks();
});
