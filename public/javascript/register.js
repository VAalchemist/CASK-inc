const formEl = document.querySelector('.register-form');

formEl.addEventListener('submit', async function () {
    event.preventDefault();
    console.log("submit clicked");
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const address1 = document.querySelector('#address1').value.trim();
    const address2 = document.querySelector('#address2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();

    if (name && email && password) {
        console.log("creating user");
        const response = await fetch('../api/user', {
            method: 'post',
            body: JSON.stringify({
                name,
                email,
                password,
                address1,
                address2,
                city,
                state,
                zipcode,
                is_client: true
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }


});