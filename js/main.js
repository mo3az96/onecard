$(window).on("load", function () {
  $(".progress-bar").fadeOut("300", function () {
    $(this).remove();
  });
});
$(document).ready(function () {
  /***** tooltip *****/
  $('[data-toggle="tooltip"]').tooltip();

  /***** product slider *****/
  var slides = document.getElementsByClassName("products-slider");
  for (var i = 0; i < slides.length; i++) {
    var productswiper = new Swiper(
      ".products-slider-" + i + " .swiper-container",
      {
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 31,
          },
        },
        pagination: {
          el: ".products-slider-" + i + " .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".products-slider-" + i + " .swiper-btn-next",
          prevEl: ".products-slider-" + i + " .swiper-btn-prev",
        },
        on: {
          init: function (swiper) {
            $('[data-toggle="tooltip"]').tooltip();
          },
        },
      }
    );
  }

  /***** testimonial slider *****/
  var testimonialswiper = new Swiper(".testimonials-slider .swiper-container", {
    // loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 23,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-slider .swiper-btn-next",
      prevEl: ".testimonials-slider .swiper-btn-prev",
    },
  });

  /***** view more review *****/
  $(".review").each(function () {
    var height = $(this).prop("scrollHeight");
    if (height > 73) {
      $(this).addClass("trim");
      $(this).siblings(".more-cont").show();
    }
  });
  $(".more-text").click(function (e) {
    var text = $(this).parents(".testimonial").find(".review");
    var height = text.prop("scrollHeight");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      text.height(height).css("display", "block");
    } else {
      text.height(72);
    }
  });

  /***** language country modal *****/
  $("body").click(function (e) {
    $(".options-dropdown").fadeOut(300);
  });
  $(".country-select").click(function (e) {
    e.stopPropagation();
    $(this).find(".options-dropdown").fadeToggle(300);
  });
  $(".options-dropdown .country").click(function (e) {
    var innerText = $(this).html();
    var countryName = $(this).find(".text").html();
    $(".country-select .selected .country").html(innerText);
    $(".country-select input").val(countryName);
  });
  $(".lang-select").select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "lang-dropdown",
  });

  $(".country-lang").click(function (e) {
    $(".popup-overlay, .country-lang-popup").fadeIn();
    $("body").addClass("overflow");
  });
  $(".popup-overlay, .close-btn").click(function (e) {
    $(".popup-overlay, .country-lang-popup").fadeOut();
    $("body").removeClass("overflow");
  });

  $(".cats>a").click(function (e) {
    $(this).toggleClass("active").siblings("ul").slideToggle();
  });

  $(".has-sub>a>i").click(function (e) {
    e.preventDefault();
    var thisParent = $(this).parent("a");
    $(".has-sub>a").not(thisParent).removeClass("active");
    if (thisParent.siblings("ul").css("display") == "none") {
      thisParent.addClass("active").siblings("ul").slideDown(500);
    } else {
      thisParent.removeClass("active").siblings("ul").slideUp(500);
    }
    $(".has-sub>a").not(thisParent).siblings("ul").slideUp(500);
  });

  $(".menu-btn").click(function () {
    $("body").toggleClass("overflow");
    $(".sidenav-overlay").fadeToggle();
    $(".sidenav").toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".sidenav-overlay, .sidenav-close-btn").click(function () {
    $("body").removeClass("overflow");
    $(".sidenav-overlay").fadeOut();
    $(".sidenav").removeClass("active");
    $(".menu-btn").removeClass("active");
  });
  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("fixed")
    : $("header").removeClass("fixed fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });

  var height = $(".page-p").prop("scrollHeight");
  console.log(height);
  if (height > 57) {
    $(".page-p").siblings(".show-more-cont").show();
  }
  $(".show-more").click(function (e) {
    var text = $(this).parents(".head-summary").find(".page-p");
    var height = text.prop("scrollHeight");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      text.height(height).css("display", "block");
    } else {
      text.height(56).css("display", "-webkit-box");
    }
  });
});
