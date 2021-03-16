
function todoList() {
      var item = document.getElementById('todoInput').value
      var text = document.createTextNode(item)
      var newItem = document.createElement("li")
      newItem.appendChild(text)
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = "name";
      checkbox.value = "value";
      checkbox.id = "id";
      newItem.appendChild(checkbox);
      document.getElementById("todoList").appendChild(newItem)
}

