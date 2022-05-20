const oMenu = document.querySelector('#open-menu');
const cMenu = document.querySelector('#close-menu');
const links = document.querySelector('#links');

const ulist = document.querySelector('#links ul');
const navRow = document.querySelector('nav .row');

oMenu.addEventListener('click', event=>{
    event.preventDefault();
        
    links.style.display = 'inline-block';
    cMenu.style.display = 'block';
    ulist.className = 'vertical-display';

        cMenu.addEventListener('click', event=>{
            event.preventDefault();
            
            links.style.display= 'none';
            oMenu.style.display = 'inline-block';
        });
});



// Scrolling function
const height = document.getElementById('header').clientHeight;
$(window).scroll(()=>{
    if ($(this).scrollTop() > height) {
        $('nav').addClass('fixed');
    }else{
        $('nav').removeClass('fixed');        
    }
});

const scrollUpBtns = document.querySelectorAll('.contactMe .scroll-up');
scrollUpBtns.forEach(scrollUpBtn=>{
    scrollUpBtn.addEventListener('click',event=>{
        event.preventDefault();
        window.scrollTo(0, height);
    });
});



const aboutSec = document.querySelector('#about-us');
const aboutDistanceToTop = window.pageYOffset + aboutSec.getBoundingClientRect().top + '200' ;
console.log(aboutDistanceToTop);
const scrollToAboutBtns = document.querySelectorAll('.hero .scroll-down');
scrollToAboutBtns.forEach(scrollToAboutBtn=>{
    scrollToAboutBtn.addEventListener('click',event=>{
        event.preventDefault();
        window.scrollTo(0, aboutDistanceToTop);
    });
});
