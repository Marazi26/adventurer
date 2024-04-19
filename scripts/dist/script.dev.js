"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var aboutCartNames = document.querySelectorAll('.about-cart-name');
  aboutCartNames.forEach(function (name) {
    name.addEventListener('click', function () {
      var info = name.nextElementSibling;
      info.style.display = info.style.display === 'block' ? 'none' : 'block';

      if (info.style.display === 'block') {
        name.style.backgroundColor === 'red';
      } else if (info.style.display === 'none') {
        name.style.backgroundColor === 'black';
      }
    });
  });
});

function colorChange() {
  var nav = document.querySelector('nav');
  var scrollValue = window.scrollY;

  if (scrollValue > 5) {
    nav.style.backgroundColor = "#dddddd";
    nav.style.paddingTop = "1rem";
    nav.style.paddingBottom = ".9rem";
  } else {
    nav.style.backgroundColor = "#ffffff";
    nav.style.paddingTop = "1.3rem";
    nav.style.paddingBottom = "1rem";
  }
}

window.addEventListener('scroll', colorChange);