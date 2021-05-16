(function () {
  document.addEventListener("DOMContentLoaded", function() {
    var headerEl = document.querySelector('header');
    var h1El = headerEl.querySelector('h1');
    var navItems = headerEl.querySelectorAll('.navLink');

    document.addEventListener("scroll", function() {
      if (window.pageYOffset) {
        headerEl.classList.add('bgc-secondary');
        h1El.classList.add('color-white');
        navItems.forEach(function(el) { el.classList.add('color-white')})
      } else {
        headerEl.classList.remove('bgc-secondary');
        h1El.classList.remove('color-white');
        navItems.forEach(function(el) { el.classList.remove('color-white')})
      }
    });

    var scroll = new SmoothScroll('a[href*="#"]');
  });
})();