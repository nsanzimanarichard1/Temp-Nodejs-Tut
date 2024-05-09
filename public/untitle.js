// document.addEventListener('DOMContentLoaded', () =>{
//     const taskInput = document.querySelector('.input')
//     const taskBtn= document.querySelector('.addTask')
//     const addList = document.querySelector('.taskList')



//     taskBtn.addEventListener('click', () =>{
//         const taskText = taskInput.value.trim()

//         if(taskText !== ''){
//             const createdTaskItem = createTask(taskText);
//             addList.appendChild(createdTaskItem)
//             taskInput.value= '';
//         }
// })
// });

// function createTask(taskText){
    //create list element and add class called task-item
    // const createTaskElement = document.createElement('li')
    // createTaskElement.classList.add('task-item')
    //we can also insert textContent in this list without another element like below span
        // createTaskElement.textContent= taskText
        // return createTaskElement;

    // create task element called span and insert content inside 

//     const taskTextElement = document.createElement('span')
//     taskTextElement.textContent = taskText
//     taskTextElement.classList.add('task-text')

//     createTaskElement.appendChild(taskTextElement)

//     return createTaskElement



// }
document.addEventListener('DOMContentLoaded', ()=>{
    const inputText = document.querySelector('.input')
    const addTaskBtn = document.querySelector('.addTask')
    const addList = document.querySelector('.addList')

    const textInput = inputText.Value.trim()

    if (textInput !== '') {
        const insertedTask = createTask(textInput)
        addList.appendChild(insertedTask)
        insertedTask.classList.add('task-item')
        
    }
})


function createTask(textInput){
    const listElement = createElement('li')
    listElement.textContent = textInput
    listElement.classList.add('text-item')

    return listElement;
}