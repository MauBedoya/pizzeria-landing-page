import showMenu from "./utils/hamburger_menu.js"
import scrollEffect from "./utils/scroll_fade_effects.js";
import desktopNav from "./utils/desktop_nav.js";
import contactFormValidation from "./utils/form_validation.js";

// use hamburger menu
showMenu();

// scroll effects
scrollEffect("data-fade-element");

// desktop nav effects breakpoint at px: 992
desktopNav("992");

// form validation
contactFormValidation();