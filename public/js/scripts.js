/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', function () {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const imageNavbarWhite = document.body.querySelector('#imageNavbarWhite');
        const imageNavbarOrange = document.body.querySelector('#imageNavbarOrange');
        const btnlg1 = document.body.querySelector('.btn-lg-1');
        const btnlg2 = document.body.querySelector('.btn-lg-2');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            imageNavbarOrange.style.display = "none"
            imageNavbarWhite.style.display = "block"
            btnlg1.classList.remove('btn-navbar-before')
            btnlg2.classList.remove('btn-navbar-before')

        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            imageNavbarOrange.style.display = "block"
            imageNavbarWhite.style.display = "none"
            btnlg1.classList.add('btn-navbar-before')
            btnlg2.classList.add('btn-navbar-before')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


var arrowBounce = function () {
    var arrow = $(".mdi-arrow-down ");

    if (arrow.length > 0) {
        arrow.each(function () {
            if ($(this).hasClass("lift")) {
                $(this).removeClass("lift");
            } else {
                $(this).addClass("lift");
            }
        });
    }
};


window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (reveals[i] && reveals[i].classList) {
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

setInterval(arrowBounce, 800);