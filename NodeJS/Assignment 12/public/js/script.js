let arrayOfLists = [];

window.addEventListener('DOMContentLoaded', (event) => {
    axios.get('/expense/get')
    .then(res => {
        arrayOfLists = res.data;
        arrayOfLists.forEach(list => {
            addExpenseToList(list);
        })
    })
    .catch(err => console.log(err));
});

function addExpenseToList(expense){
    const container = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "list-group-item");
    newLi.innerHTML = `${expense.Amount} - ${expense.Description}`;
    container.appendChild(newLi);

    const deleteButton = document.createElement('a');
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    deleteButton.setAttribute("href", `/expense/delete/${expense.id}`);
    newLi.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.setAttribute("class", "btn btn-success btn-sm float-right edit")
    editButton.setAttribute("data-toggle", "modal")
    editButton.setAttribute("data-target", "#exampleModalCenter")
    newLi.appendChild(editButton);

    editButton.addEventListener('click', () => {
        document.querySelector('#newAmount').value = expense.Amount;
        document.querySelector('#newDescription').value = expense.Description;
        document.querySelector('#newCategory').value = expense.Category;
        document.querySelector('#id').value = expense.id;
        document.querySelector('#editForm').setAttribute("action", `/expense/edit/${expense.id}`);
    });
}