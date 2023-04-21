const d = document;
const $hamburgerBtn = d.querySelector(".hamburger");
const $navMenu = d.getElementById("mobile-nav");

export default function showMenu() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger, .hamburger *")  || e.target.matches(".nav-item") ){
      $hamburgerBtn.classList.toggle("is-active");
      $navMenu.classList.toggle("active-menu");
    } else {
      $hamburgerBtn.classList.remove("is-active");
      $navMenu.classList.remove("active-menu");
    }
  })
}