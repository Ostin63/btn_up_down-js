!function(){"use strict";let t,e=document.querySelector(".up_down_btn");window.addEventListener("scroll",(function(){let n=window.pageYOffset;n>document.documentElement.clientHeight&&(e.classList.add("up_down_btn-show"),e.innerHTML="&laquo;",e.setAttribute("title","Наверх"),t=!1),0===n&&(e.classList.add("up_down_btn-show"),e.innerHTML="&raquo;",e.setAttribute("title","Вниз"),t=!0)})),e.addEventListener("click",(function(){e.classList.add("up_down_btn-disabled"),t?t&&function t(){Math.ceil(window.pageYOffset+document.documentElement.clientHeight)!=document.documentElement.scrollHeight?(window.scrollBy(0,60),setTimeout(t,0)):e.classList.remove("up_down_btn-disabled")}():function t(){0!==window.pageYOffset?(window.scrollBy(0,-60),setTimeout(t,0)):e.classList.remove("up_down_btn-disabled")}()}))}();