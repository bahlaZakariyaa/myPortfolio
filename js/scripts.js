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

    // Scrolling function
    const height = document.getElementById('header').clientHeight;
    $(window).scroll(() => {
        if ($(this).scrollTop() > height) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    const scrollUpBtns = document.querySelectorAll('.contactMe .scroll-up');
    scrollUpBtns.forEach(scrollUpBtn => {
        scrollUpBtn.addEventListener('click', event => {
            event.preventDefault();
            window.scrollTo(0, height);
        });
    });



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

})();