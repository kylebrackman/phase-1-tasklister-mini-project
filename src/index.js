document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => { 
    e.preventDefault()
    buildTask(e.target.new_task_description.value)
    form.reset()
  })
})

function buildTask(task) {
  let p = document.createElement('p');
  p.textContent = task;
  p.id = task+"_p"
  document.querySelector('#list').appendChild(p);
  
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteButton);
  btn.textContent = '  x';
  p.appendChild(btn);
  console.log(p);
  
  let slct = document.createElement('select')
  slct.id = task
  p.appendChild(slct);
  
  let optionDefault = document.createElement('option')
  optionDefault.innerText = "Priority Level"
  optionDefault.value = "gray"
  optionDefault.id = "optionGray"
  slct.appendChild(optionDefault);
  
  let option1 = document.createElement('option')
  option1.innerText = "High Priority"
  option1.value = "red"
  option1.id = "optionRed"
  slct.appendChild(option1);

  let option2 = document.createElement('option')
  option2.innerText = "Normal Priority"
  option2.value = "yellow"
  option2.id = "optionYellow"
  slct.appendChild(option2)
  
  let option3 = document.createElement('option')
  option3.innerText = "Low Priority"
  option3.value = "green"
  option3.id = "optionGreen"
  slct.appendChild(option3)

  slct.addEventListener('change', priorityChange)
}

function deleteButton(e) {
  e.target.parentNode.remove()
}

function changeColor(id) {
  let selectElement = document.getElementById(id);
  console.log(selectElement)
  let color = selectElement.value;
  let parent = document.getElementById(id+"_p");
  parent.style.color = color
}

function priorityChange(e) {
  console.log(e);
  changeColor(e.target.id)
}
