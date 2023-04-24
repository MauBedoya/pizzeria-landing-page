const d = document;
const w = window;

export default function desktopNav(breakpoint) {
  // const breakpoint = w.matchMedia(`(min-width: ${breakpoint})`);

  // breakpoint.addEventListener("DomContentLoaded", (e) => {
  w.addEventListener("DOMContentLoaded", (e) => {
    // console.log(e);
    // console.log(w.innerWidth);
    // console.log(breakpoint);
    if (w.innerWidth >= breakpoint) {
      w.addEventListener("scroll", () => {
        const $nav = d.querySelector(".nav-sticky");
        const $whatsappBtn = d.querySelector(".whatsapp-btn");
        // console.log(scrollY);
        if (scrollY >= 98) {
          $nav.classList.add("desktop-menu");
          $whatsappBtn.classList.add("desktop-btn");
        } else {
          $nav.classList.remove("desktop-menu");
          $whatsappBtn.classList.remove("desktop-btn");
        }
      })
    }
  })
}
