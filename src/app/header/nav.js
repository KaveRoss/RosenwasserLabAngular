window.onload = () => {
  navSlide();
};
const navSlide = () => {
  const burger = document.querySelector(".bars");
  const nav = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFadeIn 0.5s ease forwards ${
          index / 7 + 0.1
        }s`;
      }
    });

    burger.classList.toggle("bar-active");
  });
  window.onscroll = () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("bar-active");
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "";
      }
    });
  };
};
