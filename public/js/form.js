// Form submission with email functionality
export function initForm() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById("submit-btn");
        const btnText = document.getElementById("btn-text");
        const btnIcon = document.getElementById("btn-icon");
        const formMessage = document.getElementById("form-message");

        // Get form data
        const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value || "Not provided",
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
        };

        // Disable button and show loading state
        submitBtn.disabled = true;
        btnText.textContent = "Sending...";
        btnIcon.classList.add("animate-spin");
        formMessage.classList.add("hidden");

        try {
          // Send to your API endpoint
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const result = await response.json();

          if (response.ok) {
            // Success
            formMessage.className =
              "p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-200";
            formMessage.textContent =
              result.message ||
              "Message sent successfully! I will get back to you soon.";
            formMessage.classList.remove("hidden");

            // Reset form
            form.reset();
          } else {
            // Error from server
            throw new Error(result.error || "Failed to send message");
          }
        } catch (error) {
          // Error
          formMessage.className =
            "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-800 dark:text-red-200";
          formMessage.textContent =
            error.message ||
            "Failed to send message. Please try again or email me directly.";
          formMessage.classList.remove("hidden");
        } finally {
          // Re-enable button
          submitBtn.disabled = false;
          btnText.textContent = "Send Message";
          btnIcon.classList.remove("animate-spin");
        }
      });
    }
  });
}
