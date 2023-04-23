import desktopNav from "./utils/desktop_nav.js";
import showMenu from "./utils/hamburger_menu.js"
import scrollEffect from "./utils/scroll_fade_effects.js";

// use hamburger menu
showMenu();

// scroll effects
scrollEffect();

// desktop nav effects min-width: 992px
desktopNav("992px");