/*document.addEventListener("DOMContentLoaded", () => {
 let form = document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    buildToDo(e.target.create-task-description.value)
    form.reset()
  })
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
})*/

const main = document.querySelector('#main-content')
console.log(main)

const taskform = document.querySelector('#create-task-form')
const tasklist = document.querySelector('#tasks')

taskform.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTask = document.querySelector('#new-task-description').value

tasklist.innerHTML += `
<li> ${newTask}
<button data-action="delete" data-matt="powerful" data-charlie="downfield">x</button>
</li>
` 
taskform.reset()
})

tasklist.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target.dataset.action === "delete"){
    e.target.parentElement.remove()
  }
})