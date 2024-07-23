const navbtn = document.querySelector(".nav-btn");
navbtn.addEventListener('click',()=>{
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});