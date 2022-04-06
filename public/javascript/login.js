const formEl = document.querySelector('#login-form');

//event listener for login
formEl.addEventListener('submit', async function () {
    event.preventDefault();
    console.log("login submit clicked");
    //get all values from frontend
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    //check to see if there is email, and password
    if (email && password) {
        // fetch to see if the email and password match a client
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //if there's a response redirect to index
        console.log(response);
        if (response.ok) {
            document.location.replace('/index');
            console.log("user exists");
        } else {
            console.log("user doesnt exists");
        }
    }


});