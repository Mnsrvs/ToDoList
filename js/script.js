// create variable for add button
let addBtn = document.querySelector("#addBtn");

// event for add button
addBtn.addEventListener("click", addTask);

// function for add button event
function addTask() {

  // variable for input
  let inputTask = document.querySelector("#inputTask");
  // variable to store inputTask value
  let task = inputTask.value;
  
  if(!task) {
    alert("Please add a task in the form");
    return;
   } else {
  
   }

  // parent node
  let taskContainer = document.querySelector("#taskContainer");

  // add content div child node
  let content = document.createElement("div");
  content.id = "content";

  // append content
  taskContainer.appendChild(content);

  // add checkbox child node
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkBox";
  let check = checkBox.value;

  // event 
  checkBox.addEventListener("change", markDone);
  
  // function for checkbox
  function markDone() {
    if (this.checked) {
      result.style.textDecoration = "line-through";
      result.style.textDecorationColor = "rgb(63, 78, 79)";
      result.style.textDecorationThickness = "3px";
      editBtn.setAttribute("disabled", "");
    } else {
      result.style.textDecoration = "none";
      editBtn.removeAttribute("disabled", "");
    }
  }

  // append checkbox
  content.appendChild(checkBox);

  // add taskContent div child node
  let taskContent = document.createElement("div");
  taskContent.classList = "task";

  // append taskContent
  content.appendChild(taskContent);

  // add result child node
  let result = document.createElement("input");
  result.type = "text";
  result.id = "result";
  result.value = task;
  result.defaultValue = task;
  result.setAttribute("readonly", "");

  // append result
  taskContent.appendChild(result);

  
  // add buttons div child node
  let buttons = document.createElement("div");
  buttons.classList = "buttons";

  // add edit button child node
  let editBtn = document.createElement("button");
  editBtn.classList = "editBtn";
  editBtn.innerHTML = "Edit";
  
  // event for edit button
  editBtn.addEventListener("click", editTask);

  // add delete button child node
  let delBtn = document.createElement("button");
  delBtn.classList = "delBtn";
  delBtn.innerHTML = "Remove";

  // event for delete button
  delBtn.addEventListener("click", deleteTask)
  
  // append button
  buttons.appendChild(editBtn);
  buttons.appendChild(delBtn);
  content.appendChild(buttons);

  if (taskContainer.childElementCount === 5) {
    addBtn.setAttribute("disabled", "");
    addBtn.setAttribute("style", "background-color: gray");
  } else {
    
  }

  // inputTask value will be empty after adding task
  inputTask.value = "";

  // function for edit button
  function editTask() {
    if (editBtn.innerHTML === "Edit") {
      result.removeAttribute("readonly", "");
      result.focus();
      editBtn.innerHTML = "Save";
      checkBox.style.display = "none";
    } else {
      result.setAttribute("readonly", "");
      editBtn.innerHTML = "Edit";

      let confirmSave = "Are you sure you want to save?";

      if (confirm(confirmSave) === true) {
        let editItem = result.value;
        result.defaultValue = editItem;
        checkBox.style.display = "block";
      } else {
        result.value = result.defaultValue;
        checkBox.style.display = "block";
      }
    }
  }

  // function for delete button
  function deleteTask() {
    if (taskContainer.childElementCount <= 5) {
      addBtn.removeAttribute("disabled", "");
      addBtn.removeAttribute("style", "");
    } else {
      
    }

    let delText = "Do You want to remove your task?";

    if (confirm(delText) === true) {
      content.remove();
    } else if (taskContainer.childElementCount === 5) {
      addBtn.setAttribute("disabled", "");
      addBtn.setAttribute("style", "background-color: gray");
    } else {

    }
  }
}