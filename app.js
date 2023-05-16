window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  
  $('#carouselExampleControls').carousel({
    interval: 3000 // Установка интервала в 3 секунды
  });

