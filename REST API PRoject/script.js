let arrayOfBills = [];

const axiosInstance = axios.create({
    baseURL: 'https://crudcrud.com/api/84b5f917888a4eeba6650bcfc6bf11fe'
})

window.addEventListener('DOMContentLoaded', (event) => {
   fetchFromServer();
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchFormData();
})

function fetchFormData(){
    const billAmount = document.getElementById('bill').value;
    const dishName = document.getElementById('dishname').value;
    const tableNo = document.getElementById('tableno').value;
    const tableData = {
        billAmount : billAmount, 
        dishName : dishName, 
        tableNo : tableNo
    };
    saveToServer(tableData);
}

function addBillToList(tableData){
    const container = document.querySelector(`#table${tableData.tableNo}`);
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "list-group-item");
    newLi.innerHTML = `${tableData.billAmount} - ${tableData.dishName}`;
    container.appendChild(newLi);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        deleteFromServer(tableData);
        container.removeChild(newLi);
    })
}

function fetchFromServer(){
    axiosInstance.get('/bills/')
    .then(res => {
        arrayOfBills = res.data;
        arrayOfBills.forEach(bills => {
            addBillToList(bills);
        })
    })
    .catch(err => console.error(err));
}

function saveToServer(tableData){
    axiosInstance.post('/bills/', tableData)
        .then( res => {addBillToList(res.data)})
        .catch(err => console.error(err));
}

function deleteFromServer(tableData){
    axiosInstance.delete(`/bills/${tableData._id}`)
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

var shoppingCart = { 
    Shampoo: 100,
    Soap: 30,
    Towel: 200,
    Water: 50
}

console.log(shoppingCart.Shampoo);