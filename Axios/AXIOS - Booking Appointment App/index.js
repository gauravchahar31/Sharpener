let form=document.querySelector('form');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  fetchFormData();
})

function fetchFormData(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const userData = {name, email, phoneNumber, date, time};
    axios.post('https://crudcrud.com/api/b70c26c0bd1f448fa03bc2293074cd52/appointments', userData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
}

window.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('response');
  axios.get('https://crudcrud.com/api/b70c26c0bd1f448fa03bc2293074cd52/appointments')
    .then(res => {box.innerHTML = JSON.stringify(res.data)})
    .catch(err => console.log(err));
});
