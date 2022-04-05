const formEl = document.querySelector('.register-form');
//event listener for register
formEl.addEventListener('submit', async function () {
    event.preventDefault();
    console.log("register submit clicked");
    //get all values from frontend
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const address1 = document.querySelector('#address1').value.trim();
    const address2 = document.querySelector('#address2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    //check to see if there is name, email, and password
    if (name && email && password) {
        console.log("creating user");
        //fetch to post the user
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
            //type of content being passed
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/index/');
          } else {
            alert(response.statusText);
          }
    }


});