const anchor_tags = document.querySelectorAll('.anchor')
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn')
const offCanvasMenu = document.querySelector('.offcanvas-menu');


menuCloseBtn.addEventListener('click', function(){
  offCanvasMenu.classList.remove('translate-x-0');
  offCanvasMenu.classList.add('translate-x-full');
})
menuOpenBtn.addEventListener('click', function(){
  offCanvasMenu.classList.remove('translate-x-full');
  offCanvasMenu.classList.add('translate-x-0');
})


anchor_tags.forEach(anchor => {
   anchor.addEventListener('click', function () {   
    console.log("yeah")
    offCanvasMenu.classList.remove('translate-x-0');
    offCanvasMenu.classList.add('translate-x-full');     
       
  
     
    });
  });







