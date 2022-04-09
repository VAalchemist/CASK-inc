const dateEl = document.querySelector('.date-form');
const handymanEl = document.querySelector('.handy-man');


dateEl.addEventListener('submit', async function () {
  event.preventDefault();
  console.log(handymanEl.getAttribute('id'));
  const response = await fetch ('/api/appointments', {
      method: 'post',
      body: JSON.stringify({
          date: document.querySelector('.date-input').value,
          handyman_id: handymanEl.getAttribute('id')

      }),
      headers: {'Content-Type': 'application/json'}
  });
  // console.log(response);


});