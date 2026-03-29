document.addEventListener("scroll", function() {
  document.querySelectorAll(".card").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
});