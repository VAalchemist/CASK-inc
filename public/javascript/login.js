const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', async function () {
    event.preventDefault();
    console.log("login submit clicked");
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/index');
            console.log("user exists");
        } else {
            alert(response.statusText);
        }
    }


});