let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// form sumbit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItem);
//add item
function addItem(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById("item").value;

  // create  new li element
  let li = document.createElement("li");

  // add class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // create delete btn element
  let deleteBtn = document.createElement("button");

  // add class to del btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // add text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // append delete
  li.appendChild(deleteBtn);
  // append li to list
  itemList.appendChild(li);
}

// REmove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// filter Item
function filterItem(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // get list
  let items = itemList.getElementsByTagName("li");
  // convert to an arry
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
