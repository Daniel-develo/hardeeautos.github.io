let menu = document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
  
document.querySelector('#login-btn').onclick =() =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}



document.querySelector('#close-login-form').onclick =() =>{
    document.querySelector('.login-form-container').classList.remove('active');
}



document.querySelector('.home').onmousemove=(e)=>{
document.querySelectorAll('.home-parallex').forEach(eln=>{
let speed =eln.getAttribute('data-speed')
}};
















