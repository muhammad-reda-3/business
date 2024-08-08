// header
let humborger = document.querySelector('.humborger');
let link = document.querySelector('header nav>ul');

humborger.addEventListener('click', () =>{
  humborger.classList.toggle('active');
  link.classList.toggle('active');
});

document.querySelectorAll('header ul>li>a').forEach(n => n.addEventListener('click', ()=>{
  humborger.classList.remove('active');
  link.classList.remove('active');
}));

