// Add loading animation for page
export function initLoadingAnimation() {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
}
