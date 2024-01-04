$(document).ready(function () {

  $("a").on('click', function (event) {
    // event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  });

  $('#owl-carouse-prices').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    navText: [
      "<span class='mdi mdi-left mdi-apple-keyboard-control' style='background-color: #f84f01'></span>",
      "<span class='mdi mdi-right mdi-apple-keyboard-control' style='background-color: #f84f01'></span>"
    ],
    autoplay: false,
    autoplayHoverPause: false,
    stopOnHover: true,
    slideSpeed: 500,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    singleItem: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }

  });


  $('#owl-carouse-logos').owlCarousel({
    items: 2,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1200,
    autoplayHoverPause: true
  });

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
});