// nav bar
$("body").css("paddingTop", $(".navber").innerHeight() + 100);
$(".navbar li a").click(function (e) {
  e.preventDefault();
  $("html , body").animate(
    {
      scrollTop: $("#" + $(this).data("scroll")).offset().top
    },
    1000
  );
});
$(".navbar li a").click(function () {
  $(".navbar a").removeClass("active");
  $(this).addClass("active");
});

$(window).scroll(function () {
  $(".block").each(function () {
    if ($(window).scrollTop() > $(this).offset().top) {
      const id = $(this).attr("id");
      $(".navbar a").removeClass("active");
      $(`.navbar li a[data-scroll=${id}]`).addClass("active");
    }
  });
});
$(document).ready(function () {
  // Show or hide the button based on the scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
