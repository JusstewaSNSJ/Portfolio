window.onload = function() {
    handleNavbar();
}

window.addEventListener('resize', handleNavbar);

document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    var navBarLinks = document.querySelector('.nav-bar-links');
    if (navBarLinks.classList.contains('show')) {
        navBarLinks.classList.add('fadeOut');
        navBarLinks.addEventListener('animationend', function() {
            navBarLinks.classList.remove('show');
            navBarLinks.classList.remove('fadeOut');
        }, { once: true });
    } else {
        navBarLinks.classList.remove('fadeOut');
        navBarLinks.classList.add('show');
    }
});

document.addEventListener('click', function(event) {
    var navBarLinks = document.querySelector('.nav-bar-links');
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (!navBarLinks.contains(event.target) && !mobileMenuButton.contains(event.target) && navBarLinks.classList.contains('show')) {
        navBarLinks.classList.add('fadeOut');
        navBarLinks.addEventListener('animationend', function() {
            navBarLinks.classList.remove('show');
            navBarLinks.classList.remove('fadeOut');
        }, { once: true });
    }
});

function handleNavbar() {
    var nav = document.querySelector('.nav-bar-links');
    if (window.innerWidth > 767) {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    }
}