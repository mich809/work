const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.getElementById('mobile-menu')
const anchor_tags = document.querySelectorAll('.anchor')

anchor_tags.forEach(anchor => {
   anchor.addEventListener('click', function handleClick(event) {
         hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'menu' : 'close';
         mobile_menu.classList.toggle('mobile-menu');
  
     
    });
  });





hamburger.addEventListener('click', ()=>{
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';
    mobile_menu.classList.toggle('mobile-menu');
})

