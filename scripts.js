document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
$(document).ready(function() {
    $("#facilities-carousel").owlCarousel({
        items: 5,                   // Show 5 items per slide
        loop: true,                 // Enable infinite loop
        margin: 10,                 // Margin between items
        nav: true,                  // Show navigation
        navText: ['prev', 'next'],  // Custom navigation text
        dots: false,                // Disable dots if not needed
        autoplay: true,             // Enable auto-change
        autoplayTimeout: 30000,     // Auto-change every 30 seconds
        autoplayHoverPause: true,   // Pause on hover
        responsive: {
            0: {
                items: 1            // Show 1 item on small screens
            },
            600: {
                items: 3            // Show 3 items on medium screens
            },
            1000: {
                items: 5            // Show 5 items on larger screens
            }
        }
    });

    // Custom prev and next buttons functionality
    $('.owl-prev_3').click(function() {
        $('#facilities-carousel').trigger('prev.owl.carousel');
    });

    $('.owl-next_3').click(function() {
        $('#facilities-carousel').trigger('next.owl.carousel');
    });
});
