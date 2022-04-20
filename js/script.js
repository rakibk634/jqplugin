// ================JAVA SCRIPT START==================

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

// ================JQUERY START=================

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // 2nd
  $(".incremental-counter").incrementalCounter({ digits: "auto" });

  // SLICK SLIDER

  $(".enter").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // 2nd Slick Slider
  $(".mitems").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
