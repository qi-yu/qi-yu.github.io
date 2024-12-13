document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineSection = document.getElementById("timeline");

  const handleScroll = () => {
    const triggerBottom = window.innerHeight / 2; // Trigger when the item is at the center of the viewport

    // Check if the "My Journey" section is in the viewport
    const timelineSectionTop = timelineSection.getBoundingClientRect().top;
    if (timelineSectionTop <= 0 && timelineSectionTop + timelineSection.offsetHeight >= window.innerHeight) {
      timelineSection.classList.add("active");
    } else {
      timelineSection.classList.remove("active");
    }

    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      // Check if the item is within the viewport
      if (itemTop < triggerBottom && itemTop > -item.offsetHeight) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
});