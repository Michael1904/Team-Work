document.getElementById("burgerMenu").addEventListener("click", function() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    } else {
      navMenu.classList.add("open");
    }
  });
  