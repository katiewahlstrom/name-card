const inputNameElement = document.getElementById("inputName");
const addButtonElement = document.getElementById("addButton");

addButtonElement.addEventListener("click", function () {
  updateName();
});

function updateName() {
  const name = inputNameElement.value;

  document.getElementById("nameTagName").innerText = name;

  alert(`Hello, my name is ${name}`);
}
