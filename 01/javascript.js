/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
// Khi ấn vào link sẽ đến các trang khác
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
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

});


let paginationLeftPos = "20px";
let paginationOpacity = 0;
let checkPaginationClick = 0;

$(".pagination-page-number").click(function() {
    $(".pagination-page-number").removeClass("active");
    $(this).addClass("active");
    paginationLeftPos = $(this).prop("offsetLeft") + "px";
    paginationOpacity = 1;
    checkPaginationClick = 1;

    $(".pagination-hover-overlay").css({
        left: paginationLeftPos,
        backgroundColor: "#00178a",
        opacity: paginationOpacity
    });

    $(this).css({
        color: "#fff"
    });

});

$(".pagination-page-number").hover(
    function() {
        paginationOpacity = 1;
        $(".pagination-hover-overlay").css({
            backgroundColor: "#00c1dd",
            left: $(this).prop("offsetLeft") + "px",
            opacity: paginationOpacity
        });

        $(".pagination-page-number.active").css({
            color: "#333d45"
        });

        $(this).css({
            color: "#fff"
        });
    },
    function() {
        if (checkPaginationClick) {
            paginationOpacity = 1;
        } else {
            paginationOpacity = 0;
        }

        $(".pagination-hover-overlay").css({
            backgroundColor: "#00178a",
            opacity: paginationOpacity,
            left: paginationLeftPos
        });

        $(this).css({
            color: "#333d45"
        });

        $(".pagination-page-number.active").css({
            color: "#fff"
        });
    }
);

