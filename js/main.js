// Variables
const player = new Plyr("video");
const navLinks = document.querySelectorAll("nav a");

// Functions
function smoothScroll(e) {
  e.preventDefault();

  const sectionID = this.getAttribute("href").substring(1);
  const targetSection = document.getElementById(sectionID);

  // Smooth scroll to the target section
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Event Listeners

document.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});
