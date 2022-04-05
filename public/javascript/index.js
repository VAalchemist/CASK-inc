const formEl = document.querySelector('.logout-form');

formEl.addEventListener('submit', async function () {
    event.preventDefault();
    const response = await fetch('/api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("logout" + response);
    
      if (response.ok) {
        document.location.replace('/login');
      } else {
        // alert(response.statusText);
      }

});