document.addEventListener('DOMContentLoaded', () =>{
    axios.get('/appointments/get')
        .then(res => {
            res.data.forEach(appointment => {
                addAppointments(appointment);
            })
        })
        .catch(err => console.error(err));
});

function addAppointments(appointment){
    const container = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "list-group-item");
    newLi.innerHTML = `${appointment.name}|${appointment.email}|${appointment.phone}|${appointment.appointmentDate}|${appointment.appointmentTime}`;
    container.appendChild(newLi);

    const deleteButton = document.createElement('a');
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    deleteButton.href = `/appointments/delete/${appointment.email}`
    newLi.appendChild(deleteButton);
}