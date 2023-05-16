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


  // $(window).scroll(function () {
  //   triggerSlideIns($(this), [$('div.itm'), $('div.ant-itm')]);
  // });


  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  // $(window).on("load", function () {
  //   $(window).scroll(function () {
  //     $(".fade").each(function () {
  //       var bottom_of_object = $(this).position().top + $(this).outerHeight();
  //       var bottom_of_window = $(window).scrollTop() + $(window).height();
  //       if (bottom_of_window > bottom_of_object) {
  //         $(this).animate({ 'opacity': '1' }, 900);
  //       }
  //     });
  //   }).scroll();
  // });


  // $(function () {
  //   $(window).on("scroll", function () {
  //     if ($(window).scrollTop() > 50) {
  //       $(".navbar").addClass("hover-nav");
  //     } else {
  //       //remove the background property so it comes transparent again (defined in your css)
  //       $(".navbar").removeClass("hover-nav");
  //     }
  //   });
  // });

  // const class1 = $('#slide-1').attr('class');

  // if (class1 == "active") {
  //   console.log(1);
  // }

  // $('#slide-1').bind('DOMSubtreeModified', function (e) {
  //   console.log(class1);
  // });

});


// $.getDocHeight = function () {
//   return Math.max(
//     $(document).height(),
//     $(window).height(),
//     document.documentElement.clientHeight
//   );
// };

// $.getScrollPercentage = function () {
//   return 100 * Math.min(
//     ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
//     $(window).scrollTop()
//   );
// };

// var triggerSlideIns = function (t, items) {

//   for (var i = 0; i < items.length; i++) {
//     if ((($.getDocHeight() - $(window).height()) - ($.getDocHeight() - items[i].offset().top)) <= t.scrollTop()) {
//       if (!items[i].hasClass('transitionSlideIn')) {
//         items[i].addClass('transitionSlideIn');
//       }
//     } else { items[i].removeClass('transitionSlideIn'); }
//   }
// };
