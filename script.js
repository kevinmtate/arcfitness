(function () {
  var smallScreen = 480;
  var mediumScreen = 960;

  document.addEventListener("DOMContentLoaded", function() {
    var headerEl = document.querySelector("header");
    var h1El = headerEl.querySelector("h1");
    var navItems = headerEl.querySelectorAll(".navLink");
    var hamburgerEl = headerEl.querySelector("#hamburger");
    var headerContent = headerEl.querySelector(".headerContent");

    document.addEventListener("scroll", function() {
      if (window.screen.width < mediumScreen) {
        return;
      }

      if (window.pageYOffset) {
        headerContent.classList.add("bgc-secondary");
        h1El.classList.add("color-white");
        navItems.forEach(function(el) { el.classList.add("color-white")})
      } else {
        headerContent.classList.remove("bgc-secondary");
        h1El.classList.remove("color-white");
        navItems.forEach(function(el) { el.classList.remove("color-white")})
      }
    });
    
    hamburgerEl.addEventListener("click", function() {
      headerContent.classList.toggle("headerContent-show");
    });

    navItems.forEach(function(el) {
      el.addEventListener("click", function() {
        if (window.screen.width < smallScreen) {
          headerContent.classList.remove("headerContent-show");
        }
      });
    })

    var scroll = new SmoothScroll("a[href*='#']");
  });
})();