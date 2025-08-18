// Preload images for better performance
export function preloadImages() {
  document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
      "/images/shahin.jpg",
      "/placeholder.svg?height=200&width=400",
    ];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  });
}
