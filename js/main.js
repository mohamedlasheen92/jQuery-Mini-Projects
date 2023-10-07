/* JQuery Course */
$(document).ready(function () {

  $("body").css("paddingTop", $(".links").innerHeight());

  $(".links a").on("click", function (event) {
    event.preventDefault();

    // Go to sections
    let sectionOffSetTop = $(`section.${$(this).data("scroll")}`).offset().top;
    $("html").animate({
      scrollTop: sectionOffSetTop - $(".links").innerHeight()
    }, {
      duration: 500,
      easing: "swing"
    });

    // Change active when click
    $(this).addClass("active").siblings().removeClass("active");

  })

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 1000) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();

    }
  })
  $(".up").on("click", function () {
    $("html").animate({ scrollTop: 0 }, { duration: 500 });
  })



  // Popups
  $('.show').click(function () {
    $(`.${$(this).data("popup")}`).addClass("active");
  })
  $('.close').click(function () {
    $(`.${$(this).data('close')}`).removeClass('active');
  })

  // Progress bar

  $(".animated-progress span").each(function () {
    $(this).animate({
      width: $(this).data("progress") + "%",
    }, {
      duration: 1000,
      easing: "swing",
      step: function (num) {
        $(this).text(Math.floor(num) + "%");
      }
    })
  })


  // Fixed Menu
  $(".fixed-menu").css("left", `-${$(".fixed-menu").innerWidth()}px`);
  $(".fixed-menu .toggler").on("click", function () {
    const fixedMenu = $(this).parents(".fixed-menu");
    fixedMenu.toggleClass("is-visible");
    if (fixedMenu.hasClass("is-visible")) {
      fixedMenu.animate({
        left: 0,
      }, 350);

      $("body").animate({
        paddingLeft: `${$(".fixed-menu").innerWidth()}px`,
      }, 350)

    } else {
      fixedMenu.animate({
        left: `-${$(".fixed-menu").innerWidth()}px`
      }, 350);

      $("body").animate({
        paddingLeft: 0,
      }, 350)

    }


  })

  // Change Theme
  const themeBtns = $(".fixed-menu .colors button");
  themeBtns.each(function () {
    $(this).css("backgroundColor", `#${$(this).data("color")}`);
  })

  $(".fixed-menu .colors button").on("click", function () {
    $("body").css("--main-color", "#" + $(this).data("color"));
  })

  // Gallery
  $(".gallery .all-imgs img").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".gallery .main-img img").hide().attr("src", $(this).attr("src")).fadeIn();
  })
  $(".right-arrow").on("click", function () {
    if ($(".gallery .all-imgs img.active").is(":last-child")) {
      $(".gallery .all-imgs img").first().click();
    } else {
      $(".gallery .all-imgs img.active").next().click();
    }

  })
  $(".left-arrow").on("click", function () {
    if ($(".gallery .all-imgs img.active").is(":first-child")) {
      $(".gallery .all-imgs img").last().click();
    } else {
      $(".gallery .all-imgs img.active").prev().click();
    }
  })

  // Error Message
  $(".error-msg").each(function () {
    $(this).animate({
      right: 0,
    }, 500, function () {
      $(this).delay(3000).animate({
        right: `-${$(".error-msg").innerWidth()}px`
      });
    })
  })

  // Form
  let placeholderTemp = "";
  $(".our-form form [placeholder]").on("focus", function () {
    placeholderTemp = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
  }).on("blur", function () {
    $(this).attr("placeholder", placeholderTemp);
  })




});
