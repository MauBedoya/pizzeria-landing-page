const d = document;
const w = window;

export default function desktopNav(bp) {
  const breakpoint = w.matchMedia(`(min-width: ${bp})`);

  breakpoint.addEventListener("change", (e) => {
    if (e.matches) {
      w.addEventListener("scroll", () => {
        const $nav = d.querySelector(".nav-sticky");
        const $whatsappBtn = d.querySelector(".whatsapp-btn");
      
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
