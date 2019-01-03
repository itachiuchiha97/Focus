//to find elements by its id
val = document.getElementById('task-title')

//to know the id
val = document.getElementById('task-title').id

console.log(val)

const taskTitle = document.getElementById('task-title')


//Change styles
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '7px'

//TO HIDE CONTENTS
// val = document.getElementById('task-title').style.display = 'none'

//CHANGE CONTENT
taskTitle.textContent = 'Tasks List'
taskTitle.innerText = 'List Tasks Here!'

//FOR ADDING OTHER HTML FILES TO IT
// taskTitle.innerHTML = '<ul><li> Name </li> <li> age </li><li> sex </li><li> loc </li></ul>'