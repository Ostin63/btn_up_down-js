/* Кнопка возврата к началу */

(function () {
  'use strict';

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = 200;

    if (scrolled > coords) {
      goTopBtn.classList.add('up_down_btn-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('up_down_btn-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -60);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector('.up_down_btn');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

/* end begin Back to Top button  */