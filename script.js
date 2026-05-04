$(document).ready(function () {
    $('.reviews-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      speed: 400,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
 
    $('#prevBtn').on('click', function () {
      $('.reviews-slider').slick('slickPrev');
    });
 
    $('#nextBtn').on('click', function () {
      $('.reviews-slider').slick('slickNext');
    });
  });


  $(document).ready(function () {
    $('.products-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      speed: 500,
      cssEase: 'ease-in-out',
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]
    });
 
    $('#prevBtn').on('click', function () {
      $('.products-slider').slick('slickPrev');
    });
 
    $('#nextBtn').on('click', function () {
      $('.products-slider').slick('slickNext');
    });
  });