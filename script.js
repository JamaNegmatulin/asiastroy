$(document).ready(function () {
  $(".cards_gov").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".popup-link").magnificPopup({
    callbacks: {
      open: function () {
        $(".slider").slick();
      },
    },
  });
  $(".popup-link1").magnificPopup({
    callbacks: {
      open: function () {
        $(".slider1").slick();
      },
    },
  });
  $(".popup-link2").magnificPopup({
    callbacks: {
      open: function () {
        $(".slider2").slick();
      },
    },
  });
  $(".popup-link3").magnificPopup({
    callbacks: {
      open: function () {
        $(".slider3").slick();
      },
    },
  });
  $(".popup-link4").magnificPopup({
    callbacks: {
      open: function () {
        $(".slider4").slick();
      },
    },
  });
});
