// Modular initialization
import { initCursor } from "./cursor.js";
import { initForm } from "./form.js";
import { initLoadingAnimation } from "./loading.js";
import { initMobileMenu } from "./mobile-menu.js";
import { initNavbarScroll } from "./navbar.js";
import { initParallax } from "./parallax.js";
import { preloadImages } from "./preload.js";
import { initQuickReply } from "./quick-reply.js";
import { initScrollReveal } from "./scroll-reveal.js";
import { initSkillsAnimation } from "./skills.js";
import { initThemeToggle } from "./theme.js";

initCursor();
initParallax();
initThemeToggle();
initNavbarScroll();
initMobileMenu();
initScrollReveal();
initSkillsAnimation();
initQuickReply();
initForm();
preloadImages();
initLoadingAnimation();
