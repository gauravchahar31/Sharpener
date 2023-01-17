let arrayOfLists = [];

window.addEventListener('DOMContentLoaded', (event) => {
    fetchFromLocalStorage();
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchFormData();
})

function fetchFormData(){
    const expenseAmount = document.getElementById('amount').value;
    const expenseDescription = document.getElementById('description').value;
    const expenseCategory = document.getElementById('category').value;
    const formData = [expenseAmount, expenseDescription, expenseCategory];
    arrayOfLists.push(formData);
    saveToLocalStorage();
    addExpenseToList(formData);
}

function addExpenseToList(formData){
    const container = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "list-group-item");
    newLi.innerHTML = `${formData[0]} - ${formData[1]}`;
    container.appendChild(newLi);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    newLi.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.setAttribute("class", "btn btn-success btn-sm float-right edit")
    newLi.appendChild(editButton);

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        removeDataFromArray(formData);
        container.removeChild(newLi);
    })

    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        removeDataFromArray(formData);
        const expenseAmount = document.getElementById('amount');
        const expenseDescription = document.getElementById('description');
        const expenseCategory = document.getElementById('category');
        expenseAmount.value = formData[0];
        expenseDescription.value = formData[1];
        expenseCategory.value = formData[2];
        container.removeChild(newLi);
    })
}

function saveToLocalStorage(){
    localStorage.expenseTracker = JSON.stringify(arrayOfLists);
}

function fetchFromLocalStorage(){
    if(localStorage.expenseTracker){
        arrayOfLists = JSON.parse(localStorage.expenseTracker);
        arrayOfLists.forEach( list => {
            addExpenseToList(list);
        })
    }
}

function removeDataFromArray(formData){
    arrayOfLists.splice(arrayOfLists.indexOf(formData), 1);
    saveToLocalStorage();
}