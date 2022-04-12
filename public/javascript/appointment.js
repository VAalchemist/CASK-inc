const appointmentEl = document.querySelector('.appt-section');

const response = fetch('/api/appointments',{
    method: 'get'
})
.then(response => response.json())
.then(data => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
        const containerEl = document.createElement('div');
        containerEl.setAttribute('class', 'bg-gray-800 py-12 px-12 flex flex-col items-center border-b-2 border-l-2 border-gray-700 rounded-lg');
        containerEl.setAttribute('style', 'margin-top: 10px;')
        const dateText = document.createElement('p');
        const clientText = document.createElement('p');
        const handymanText = document.createElement('p');
        dateText.textContent = data[i].date;
        clientText.textContent = data[i].client.name
        handymanText.textContent = data[i].user.name
        containerEl.append(clientText);
        containerEl.append(dateText);
        containerEl.append(handymanText);
        appointmentEl.append(containerEl);
    }
});