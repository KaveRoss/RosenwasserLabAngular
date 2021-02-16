document.addEventListener("scroll", () => {
  var top = window.scrollY;
  if (top >= 100) {
    document.getElementById("to-up").style.opacity = "1";
  }
});

function toUp() {
  window.scroll(0, 0);
}
