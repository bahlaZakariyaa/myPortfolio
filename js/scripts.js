(function () {
    'use strict';
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const links = document.getElementById('links');

    openMenu.addEventListener('click', event => {
        event.preventDefault();
        links.className = 'links-on';
        openMenu.style.display = 'none';

        closeMenu.addEventListener('click', event => {
            event.preventDefault();
            links.className = 'links-off';
            openMenu.style.display = 'inline-block';
        });
    });
})();