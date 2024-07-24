// Template - start //

window.onscroll = function() {
    // define all the variables
    var navbar = document.querySelector('.navbar');
    var backToTopButton = document.getElementById('back-to-top');
    var footerDev = document.getElementById('footer-dev');
    var footer = document.querySelector('.footer');
    var rect = footer.getBoundingClientRect();

    // nav bar doesn't disappear while scrolling
    if (window.pageYOffset > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // adjust footer-dev position
    if (rect.top < window.innerHeight - 40) {
        footerDev.style.bottom = (window.innerHeight - rect.top) + 'px';
        backToTopButton.style.bottom = (window.innerHeight - rect.top + 20) + 'px';
    } else {
        footerDev.style.bottom = '10px';
        backToTopButton.style.bottom = '40px';
    }

    // show/hide back to top button
    if (window.pageYOffset > 100) {
        backToTopButton.style.visibility = 'visible';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.visibility = 'hidden';
        backToTopButton.style.opacity = '0';
    }
};

// back to top functionality
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Template - end //
