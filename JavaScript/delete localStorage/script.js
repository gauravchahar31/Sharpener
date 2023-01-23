let listContent = [];

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

var deleteButton = document.getElementsByClassName('delete');
var editButton = document.getElementsByClassName('edit');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  // var deleteBtn = document.createElement('button');
  // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // deleteBtn.appendChild(document.createTextNode('X'));
  // li.appendChild(deleteBtn);

  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-success btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);
  saveNewList(newItem);
}

function removeItem(e){
    var li = e.target.parentElement;
    var liValue = li.innerText;
    itemList.removeChild(li);
    document.getElementById('item').value = liValue.split('Edit')[0];
    removeLocalStorage(liValue.split('Edit'));
}

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showLocalData(listdata){
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(listdata));
  // var deleteBtn = document.createElement('button');
  // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // deleteBtn.appendChild(document.createTextNode('X'));
  // li.appendChild(deleteBtn);
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-success btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

function removeLocalStorage(list){
  console.log(list[0]);
  let indexOfList = listContent.indexOf(list[0]);
  listContent.splice(indexOfList, 1);
  saveContent();
}

function saveNewList(list){
  listContent.push(list);
  saveContent();
}

function saveContent(list){
  localStorage.lists = JSON.stringify(listContent);
}

function fetchContent(){
  if(localStorage.lists){
    listContent = JSON.parse(localStorage.lists);
    listContent.forEach(function (list){
      showLocalData(list);
    })
  }
}

fetchContent();
