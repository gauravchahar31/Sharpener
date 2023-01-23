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
    const userData = [name, email, phoneNumber, date, time];
    console.log(userData);
}