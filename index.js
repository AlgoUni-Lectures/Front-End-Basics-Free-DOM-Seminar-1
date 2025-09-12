const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  li.appendChild(completeBtn);

  //   let completed = false;
  completeBtn.addEventListener("click", () => {
    // completed = !completed;
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      //   li.style.textDecoration = "line-through";
      //   li.classList.add("completed");
      completeBtn.textContent = "Uncomplete";
    } else {
      completeBtn.textContent = "Complete";
      //   li.style.textDecoration = "none";
      //   li.classList.remove("completed");
    }
  });

  list.appendChild(li);
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
