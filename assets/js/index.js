let menuBtn = document.querySelector("#menu-btn"),
  btnToggle = menuBtn.querySelector("i"),
  navMenu = document.querySelector("#nav-menu"),
  header = document.querySelector(".header"),
  navBtn = document.querySelectorAll(".nav__btn"),
  navTitle = document.querySelectorAll(".nav__title i"),
  navDrop = document.querySelectorAll(".nav__dropdown"),
  navLink = document.querySelectorAll(".nav__link");
menuBtn.addEventListener("click", () => {
  btnToggle.classList.contains("fa-bars")
    ? btnToggle.classList.replace("fa-bars", "fa-xmark")
    : btnToggle.classList.replace("fa-xmark", "fa-bars");
});
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  header.classList.toggle("show");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    btnToggle.classList.replace("fa-xmark", "fa-bars");
    navMenu.classList.remove("show");
    header.classList.remove("show");
  });
});
navBtn.forEach((item) => {
  const dropHeader = item.querySelector(".nav__title");
  dropHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".drop_open");
    toggleItem(item);

    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const dropContent = item.querySelector(".nav__dropdown");
  const dropArrow = item.querySelector(".nav__title i");

  if (item.classList.contains("drop_open")) {
    dropContent.removeAttribute("style");
    item.classList.remove("drop_open");
    dropArrow.style.rotate = "0deg";
  } else {
    dropContent.style.height = dropContent.scrollHeight + "px";
    item.classList.add("drop_open");
    dropArrow.style.rotate = "90deg";
  }
};

const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };
  window.addEventListener("scroll", scrollHeader);