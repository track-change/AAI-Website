import Alpine from "alpinejs";
import barba from "@barba/core";
import barbaCss from "@barba/css";

declare global {
  interface Window {
    Alpine: typeof Alpine;
    barba: typeof barba;
    barbaCss: typeof barbaCss;
  }
}

window.Alpine = Alpine;
window.barba = barba;
window.barbaCss = barbaCss;
barba.use(barbaCss);
Alpine.start();