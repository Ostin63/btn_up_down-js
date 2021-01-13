// Кнопка вверх и вниз

(function () {
  'use strict';

  let upDownBtn = document.querySelector('.up_down_btn');
  let check;

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = 200;

    if (scrolled === 0) {
      upDownBtn.classList.add('up_down_btn-show');
      upDownBtn.innerHTML = '&raquo;';
      upDownBtn.setAttribute('title', 'Вниз');
      check = true;
    }
    if (scrolled > coords) {
      upDownBtn.classList.add('up_down_btn-show');
      upDownBtn.innerHTML = '&laquo;';
      upDownBtn.setAttribute('title', 'Наверх');
      check = false;
    }
  }

  function backToTop() {
    upDownBtn.classList.add('up_down_btn-disabled');
    if (!check) {
      (function goTop() {

        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -60);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove('up_down_btn-disabled');
        }

      })();
      return;

    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 60);
          setTimeout(goBottom, 0);
        } else {
          upDownBtn.classList.remove('up_down_btn-disabled');
        }

      })();
      return;
    }

  }

  window.addEventListener('scroll', trackScroll);
  upDownBtn.addEventListener('click', backToTop);
})();