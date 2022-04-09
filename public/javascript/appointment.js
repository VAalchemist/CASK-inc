const appointmentEl = document.querySelector('.appt-section');

const response = fetch('/api/appointment',{
    method: 'get'
})
.then(response => response.json())
.then(data => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
        const containerEl = document.createElement('div');
        containerEl.setAttribute('class', 'bg-gray-800 py-12 px-12 flex flex-col items-center border-b-2 border-l-2 border-gray-700 rounded-lg');
        containerEl.setAttribute('style', 'margin-top: 10px;')
        const containerText = document.createElement('p');
        containerText.textContent = data[i].date;
        containerEl.append(containerText);
         appointmentEl.append(containerEl);
    }
});