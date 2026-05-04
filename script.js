
document.querySelectorAll('#mdclNavbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        let navbar = document.getElementById('mdclNavbar');
        let collapse = bootstrap.Collapse.getInstance(navbar);
        if (collapse) collapse.hide();
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
            messageDiv.style.color = 'green';
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