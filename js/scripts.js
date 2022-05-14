const header = document.querySelector('header');

/* --------------------- Sticky NavBar --------------------- */

function stickyNavbar(event) {
    /* 
        when we scroll down the class will be add to the header, and when we are not scrolling 
        the class scrolled will not be affected to the header
    */
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', stickyNavbar);