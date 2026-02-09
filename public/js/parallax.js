// Mouse parallax effect
export function initParallax() {
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    const parallaxElements = document.querySelectorAll(".parallax-element");
    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.02;
      const x = (mouseX - window.innerWidth / 2) * speed;
      const y = (mouseY - window.innerHeight / 2) * speed;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}
