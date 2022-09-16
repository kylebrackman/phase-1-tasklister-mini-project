document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => { 
    e.preventDefault()
    buildTask(e.target.new_task_description.value)
    form.reset()
  })
})

function buildTask(task) {
  let p = document.createElement('p')
  p.textContent = task
  document.querySelector('#list').appendChild(p) 
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteButton)
  btn.textContent = 'x'
  p.appendChild(btn)
  console.log(p)
}

function deleteButton(e) {
  e.target.parentNode.remove()
}