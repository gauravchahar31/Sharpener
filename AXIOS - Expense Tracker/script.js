let arrayOfLists = [];

window.addEventListener('DOMContentLoaded', (event) => {
    axios.get('https://crudcrud.com/api/b70c26c0bd1f448fa03bc2293074cd52/expenses/')
    .then(res => {
        console.log(res.data);
        arrayOfLists = res.data;
        arrayOfLists.forEach(list => {
            console.log(list)
            addExpenseToList(list);
        })
    })
    .catch(err => console.log(err));
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
    const formData = {
        expenseAmount : expenseAmount, 
        expenseDescription : expenseDescription, 
        expenseCategory : expenseCategory
    };
    axios.post('https://crudcrud.com/api/b70c26c0bd1f448fa03bc2293074cd52/expenses/', {expenseAmount, expenseDescription, expenseCategory})
    .then(res => {
       addExpenseToList(formData);
       location.reload();
    })
    .catch(err => console.log(err));
}

function addExpenseToList(formData){
    const container = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "list-group-item");
    newLi.innerHTML = `${formData.expenseAmount} - ${formData.expenseDescription}`;
    container.appendChild(newLi);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    newLi.appendChild(deleteButton);

    // const editButton = document.createElement('button');
    // editButton.innerHTML = "Edit";
    // editButton.setAttribute("class", "btn btn-success btn-sm float-right edit")
    // newLi.appendChild(editButton);

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        axios.delete(`https://crudcrud.com/api/b70c26c0bd1f448fa03bc2293074cd52/expenses/${formData._id}`)
        .then(res => console.log(err))
        .catch(err => console.log(err));
        container.removeChild(newLi);
    })

    // editButton.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     removeDataFromArray(formData);
    //     const expenseAmount = document.getElementById('amount');
    //     const expenseDescription = document.getElementById('description');
    //     const expenseCategory = document.getElementById('category');
    //     expenseAmount.value = formData[0];
    //     expenseDescription.value = formData[1];
    //     expenseCategory.value = formData[2];
    //     container.removeChild(newLi);
    // })
}