function onPress(event) {
  if (event.key === "Enter") {
    addItem();
  }
}

const toDoList = JSON.parse(localStorage.getItem("todolist")) || [
  { name: "party", date: "23-02-2026" },
];

todoListRender();

function addItem() {
  let input = document.querySelector(".js-input");
  let inputElement = input.value;

  let inputDate = document.querySelector(".js-input-date");
  let inputDateElement = inputDate.value;

  if (inputElement === "" || inputDateElement === "") {
    alert("Enter both task and date Properly");
  } else {
    toDoList.push({
      name: inputElement,
      date: inputDateElement,
    });
    console.log(toDoList);
    input.value = "";
    inputDate.value = "";
    saveToStorage();
    todoListRender();
  }
}

function todoListRender() {
  let todoListHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    const value = toDoList[i];

    const { name, date } = value;

    const html = `
    <div class="todo-grid">
    <div>${name}</div>     
    <div> ${date}</div>
    <button class="todo-delete-button" onclick="
      toDoList.splice(${i},1)
      todoListRender()
      saveToStorage();
    ">🗑</button>
    </div>`;

    todoListHTML += html;
  }

  document.querySelector(".js-div").innerHTML = todoListHTML;
}

function saveToStorage() {
  localStorage.setItem("todolist", JSON.stringify(toDoList));
}

