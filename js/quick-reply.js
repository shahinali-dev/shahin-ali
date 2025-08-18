// Quick reply button interactions
export function initQuickReply() {
  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(
        'button[class*="bg-primary-100"], button[class*="bg-secondary-100"], button[class*="bg-accent-100"]'
      )
      .forEach((button) => {
        button.addEventListener("click", function () {
          const messageInput = document.querySelector(
            'input[placeholder="Type your message..."]'
          );
          const buttonText = this.textContent.trim();
          const message = buttonText.replace(/^[^\w\s]+\s*/, "");
          messageInput.value = `Hi! ${message}. I'd like to discuss this further.`;
          messageInput.focus();
          this.style.transform = "scale(0.95)";
          setTimeout(() => {
            this.style.transform = "scale(1)";
          }, 150);
        });
      });
  });
}
