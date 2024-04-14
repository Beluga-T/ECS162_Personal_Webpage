//interaction: Console log when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    console.log('Page fully loaded and DOM is ready');

});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button
    var mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.rounded-section');
    let lastScrollTop = 0;
    sections.forEach(section => {
        section.classList.add('visible');
        section.classList.remove('hidden');
    });
    window.addEventListener('scroll', () => {
        let currentScroll = document.documentElement.scrollTop;

        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else {
                if (currentScroll > lastScrollTop) {
                    // Scrolling down
                    section.classList.remove('visible');
                } else {
                    // Scrolling up
                    section.classList.add('hidden');
                }
            }

            // log section current status flushing style changes
            console.log(section.id, section.classList.contains('visible') ? 'visible' : 'hidden');

        });

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values on mobile
    });

    function isInViewport(element) { // Check if element is in viewport
        const rect = element.getBoundingClientRect(); // Get the size of element and its position relative to the viewport
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    // Handle 'Back to Top' button
    document.getElementById('back-to-top').addEventListener('click', () => {
        sections.forEach(section => {
            section.classList.remove('visible');
            section.classList.add('hidden');
        });
    });
});
