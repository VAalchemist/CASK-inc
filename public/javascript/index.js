const formEl = document.querySelector('.logout-form');
const imgEl = document.querySelector('.profile-pic');

window.onload = function () {
  getUserData();
}




async function getUserData() {

  imgEl.value = "";
  const response = await fetch('/api/user/client', {
    method: 'get'
  })
    .then(response => response.json())
    .then(data => {
      if (data.profile_pic) {
        const img = document.createElement('img');
        img.setAttribute('src', data.profile_pic);
        img.setAttribute('style', "width: 100px;");
        imgEl.append(img);
      }

      else {
        const img = document.createElement('img')
        img.setAttribute('src', 'https://res.cloudinary.com/duty-call/image/upload/v1649232738/g5eikbwlwwudjsd8qnr3.png');
        img.setAttribute('style', "width: 100px;");
        imgEl.append(img);

      }

    });

}


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