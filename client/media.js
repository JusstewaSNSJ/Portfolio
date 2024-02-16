window.onload = function() {
    handleNavbar();
}

window.addEventListener('resize', handleNavbar);

document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.nav-bar-links').classList.toggle('show');
});

function handleNavbar() {
    var nav = document.querySelector('.nav-bar-links');
    if (window.innerWidth <= 767) {
        if (!nav.classList.contains('show')) {
            nav.classList.add('show');
        }
    } else {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    }
}