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
      complete: function () {
        console.log("Animation Done!");
      },
      step: function (num) {
        $(this).text(Math.floor(num) + "%");
      }
    })
  })


});
