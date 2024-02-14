window.onscroll = function() {
    var navbar = document.querySelector('.nav-bar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('nav-bar-scrolled');
    } else {
        navbar.classList.remove('nav-bar-scrolled');
    }
};