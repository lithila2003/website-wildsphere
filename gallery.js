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

//Gallery
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const imageTitle = document.getElementById("imageTitle");
    const imageSubheading = document.getElementById("imageSubheading"); // Added subheading element
    const captionText = document.getElementById("imageDescription");
    const images = document.querySelectorAll('.structure img');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', function () {
            openModal(index);
        });
    });

    function openModal(index) {
        modal.style.display = "block";
        updateModalContent(index);
        currentIndex = index;
    }

    function updateModalContent(index) {
        const img = images[index];
        modalImg.src = img.src;
        imageTitle.textContent = img.getAttribute('data-title');
        imageSubheading.textContent = img.getAttribute('data-subheading'); // Updated subheading content
        captionText.textContent = img.getAttribute('data-description');
        adjustImageSize();
    }

    function adjustImageSize() {
        const modalLeft = document.querySelector('.modal-left');
        modalImg.style.maxHeight = modalLeft.clientHeight + "px";
        modalImg.style.maxWidth = modalLeft.clientWidth + "px";
    }

    document.querySelector('.close').addEventListener('click', function () {
        modal.style.display = "none";
    });

    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateModalContent(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateModalContent(currentIndex);
    });

    window.addEventListener('resize', adjustImageSize);
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("imageModal");
    const modalContent = document.querySelector('.modal-content');
    const imageTitle = document.getElementById("imageTitle");
    const imageSubheading = document.getElementById("imageSubheading");
    const captionText = document.getElementById("imageDescription");
    
    const colorSelect = document.getElementById('color-select');
    const fontSelect = document.getElementById('font-select');

    colorSelect.addEventListener('change', function () {
        modalContent.style.backgroundColor = this.value;
    });

    fontSelect.addEventListener('change', function () {
        const selectedFont = this.value;
        imageTitle.style.fontFamily = selectedFont;
        imageSubheading.style.fontFamily = selectedFont;
        captionText.style.fontFamily = selectedFont;
    });
});

