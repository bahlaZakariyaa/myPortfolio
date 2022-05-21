(function () {
    'use strict';

    const openMenu = document.querySelector('#open-menu');
    const closeMenu = document.querySelector('#close-menu');
    const links = document.querySelectorAll('.nav-link');
    const menu = document.querySelector('#links');

    openMenu.addEventListener('click', event => {
        event.preventDefault();
        openMenu.style.display = 'none';
        menu.style.display = 'inline-block';
        closeMenu.style.display = 'inline-block';

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.style.display = 'none';
                openMenu.style.display = 'inline-block';
            });
        });

        closeMenu.addEventListener('click', event => {
            event.preventDefault();
            menu.style.display = 'none';
            openMenu.style.display = 'inline-block';
        });
    });

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            smoothScroll(event);
            links.forEach(linkitem => {
                linkitem.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });

    const contactMe = document.querySelector('#hero-form');
    contactMe.addEventListener('submit', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('action');
        const navHeight = document.querySelector('nav').offsetHeight + 5;
        const targetSection = document.querySelector(targetId);


        let originalTop = targetSection.getBoundingClientRect().top;
        originalTop = Math.floor(originalTop) - navHeight;

        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: 'smooth'
        });
    });

    function smoothScroll(event) {
        event.preventDefault();
        let targetId = event.target.getAttribute('href');
        if (targetId === '#projects') {
            targetId = '#contact-us';
        }
        const navHeight = document.querySelector('nav').offsetHeight + 5;


        const targetSection = document.querySelector(targetId);


        let originalTop = targetSection.getBoundingClientRect().top;
        originalTop = Math.floor(originalTop) - navHeight;

        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: 'smooth'
        });
    }


    // fixed navbar option
    const height = document.getElementById('header').clientHeight;
    $(window).scroll(() => {
        if ($(this).scrollTop() > height) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    // scrollDown Buttons
    const aboutSec = document.querySelector('#about-us');
    const aboutDistanceToTop = window.pageYOffset + aboutSec.getBoundingClientRect().top + '200';
    console.log(aboutDistanceToTop);
    const scrollToAboutBtns = document.querySelectorAll('.hero .scroll-down');
    scrollToAboutBtns.forEach(scrollToAboutBtn => {
        scrollToAboutBtn.addEventListener('click', event => {
            event.preventDefault();
            window.scrollTo(0, aboutDistanceToTop);
        });
    });

    // scrollUp Buttons
    const scrollUpBtns = document.querySelectorAll('.contactMe .scroll-up');
    scrollUpBtns.forEach(scrollUpBtn => {
        scrollUpBtn.addEventListener('click', event => {
            event.preventDefault();
            window.scrollTo(0, height);
        });
    });



    // footer span mouseover
    const footerSpan = document.querySelector('footer p span');

    footerSpan.addEventListener('mouseover', function (e) {
        e.target.innerHTML = '';
        e.target.innerHTML = 'zakariyaa Bahla';

        e.target.addEventListener('mouseout', function (e) {
            e.target.innerHTML = '';
            e.target.innerHTML = 'Zak Bahla';
        });
    });


})();



// Scrolling function
const height = document.getElementById('header').clientHeight;
$(window).scroll(() => {
    if ($(this).scrollTop() > height) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});