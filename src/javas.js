
document.getElementById("toggleButton").addEventListener("click", function() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("d-none")) {
      navMenu.classList.remove("d-none");
    } else {
      navMenu.classList.add("d-none");
    }
  });
