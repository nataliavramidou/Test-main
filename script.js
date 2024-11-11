var menu = document.querySelector(".menu");
var header = document.querySelector(".header");
var navItems = document.querySelectorAll(".main-nav-item");

menu.addEventListener("click", () => {
  header.classList.toggle("open");
});

//console.log(navItems);
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("open");
  });
});

var headings = document.querySelectorAll(".heading");
var infoCols = document.querySelectorAll(".info-col");

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    headings.forEach((head) => {
      if (head != heading) head.parentNode.classList.remove("active");
    });

    heading.parentNode.classList.toggle("active");
  });
});
