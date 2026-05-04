document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('mdclNavbar');
    const toggler = document.querySelector('.navbar-toggler');

    navbarCollapse.addEventListener('show.bs.collapse', () => {
        toggler.classList.add('open');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        toggler.classList.remove('open');
    });
});

document.getElementById('footerForm').addEventListener('submit', function(e){
    e.preventDefault(); // prevent page reload

    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('formMessage');

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            messageDiv.style.display = 'block';
            messageDiv.style.color = 'white';
            messageDiv.innerText = 'Thanks for subscribing!';
            form.reset();
        } else {
            return response.json().then(data => {
                throw new Error(data.error || 'Submission failed!');
            });
        }
    })
    .catch(error => {
        messageDiv.style.display = 'block';
        messageDiv.style.color = 'red';
        messageDiv.innerText = error.message;
    });
});

document.getElementById('mainForm').addEventListener('submit', function(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('mainFormMessage');

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            messageDiv.style.display = 'block';
            messageDiv.style.color = 'green';
            messageDiv.innerText = 'Form submitted successfully!';
            form.reset();
        } else {
            return response.json().then(data => {
                throw new Error(data.error || 'Submission failed!');
            });
        }
    })
    .catch(error => {
        messageDiv.style.display = 'block';
        messageDiv.style.color = 'red';
        messageDiv.innerText = error.message;
    });
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    speed: 400,
    adaptiveHeight: true,  
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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