document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider");
  const dotsContainer = document.getElementById("dots-container");
  const images = slider.getElementsByClassName("companys");
  const dots = [];
  let currentIndex = 0;
  let interval;

  // Create dots
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => setSlide(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  // Update the slider and dots
  function updateSlider() {
    const slideWidth = slider.offsetWidth / images.length;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Set the slide to a specific index
  function setSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
  }

  // Move to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }

  // Reset the interval for automatic sliding
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  // Initialize the slider
  updateSlider();
  resetInterval();

  // Resize handler to update the slider on window resize
  window.addEventListener("resize", updateSlider);
});
