const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwjq-1hbh7P-k3b8qqixpR6iO0qX3nEqK9jsjIbBn93s3XF2iUn2YTw4FWAYLzVnFC/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML="Message Sent Successfully "
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})