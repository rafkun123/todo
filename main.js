const btnAddTask = document.querySelector('.addTask')
const taskValue = document.querySelector('.inputTask')
const ulList = document.querySelector('.ulList')
const emptyTask = document.querySelector('.emptyTask')
const valueEditor = document.querySelector('.valueEditor')
const valueAccept = document.querySelector('.valueAccept')
const valueDecline = document.querySelector('.valueDecline')
const btnDoneTask = document.querySelector('.accept')
const btnEditTask = document.querySelector('.edit')
const btnDeleteTask = document.querySelectorAll('.delete')
const editor = document.querySelector('.editor')
const liList = document.querySelectorAll('li')
const errorInfo = document.querySelector('.errorInfo')
const emptyEdit = document.querySelector('.emptyEdit')
const iconAccept = document.querySelector('fa-check')
let editedTodo

const btnService = (e) => {
    // accept button into task value
    if (e.target.matches('.accept')){
        e.target.closest('li').classList.toggle('lineThrough');
        editor.style.display = "none"
    } 

    // edit button into task value
     else if (e.target.matches('.edit')){
        editor.style.display = 'block'
        // console.log(e.target.closest('li').textContent);
        valueEditor.value = e.target.closest('li').textContent
        editedTodo = e.target.closest('li')

    // delete button into task value
    } else if (e.target.matches('.delete')){
        e.target.closest('li').remove('li')
        editor.style.display = "none"
        if(document.getElementById('ul').getElementsByTagName('li').length == 0){
            errorInfo.style.display = 'block'
        } else{
            errorInfo.style.display = 'none'
        }
    }
}

// function for edditing task value
const edditingValue = () =>{
    if(valueEditor.value !== ''){
        editedTodo.firstChild.textContent = valueEditor.value
        editor.style.display = "none"
        emptyEdit.style.display = 'none'

    } else {
        emptyEdit.style.display = 'block'
    }
}

const deleteEdditingTask = () =>{
    editor.style.display = "none"
    emptyEdit.style.display = 'none'
}


const addingTask = () => {
    if(taskValue.value !== ''){
        // creating html elements
        const newLi = document.createElement('li');
        const newDiv = document.createElement('div');
        const newBtn1 = document.createElement('button');
        const newBtn2 = document.createElement('button');
        const newBtn3 = document.createElement('button');
        const iconAccept = document.createElement('i')
        const iconEdit = document.createElement('i')
        const iconDelete = document.createElement('i')

        // adding value of task to task list
        newLi.append(taskValue.value)

        // adding elements to DOM
        ulList.append(newLi)
        newLi.append(newDiv)
        newDiv.append(newBtn1, newBtn2, newBtn3)

        // adding classes to div and buttons
        newDiv.classList.add('tools')
        newBtn1.classList.add('accept')
        newBtn2.classList.add('edit')
        newBtn3.classList.add('delete')

        // adding icons to buttons
        newBtn1.innerHTML = "<i class='fa-solid fa-check'></i>"
        // newBtn1.append(iconAccept)
        // newBtn1.firstChild.classList.add('fa-solid', 'fa-check')

        newBtn2.append(iconEdit)
        newBtn2.firstChild.classList.add('fa-solid', 'fa-pen-to-square')

        newBtn3.append(iconDelete)
        newBtn3.firstChild.classList.add('fa-solid', 'fa-xmark')

        // clearing task value
        taskValue.value = ''

        // empty task error clearing
        emptyTask.style.display = 'none'
        errorInfo.style.display = 'none'

    } else{
        emptyTask.style.display = 'block'
    }
}


btnAddTask.addEventListener('click', addingTask)
valueAccept.addEventListener('click', edditingValue)
ulList.addEventListener('click', btnService)
valueDecline.addEventListener('click', deleteEdditingTask)
