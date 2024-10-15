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

// gasap animations
gsap.from(".hero-heading, .info", { 
  duration: 5, 
  opacity: 0, 
  y: -50, 
  ease: "power2.out" 
});


gsap.from(".capstone-title, .capstone-desc", { 
  opacity: 0,
  duration: 1,
  delay: 1,
});


const portfolioCon = document.querySelector("#portfolio-con");

const portfolios = [
{name: "Abdullh Sultan", pLink: "abdullhsultan.com"},
{name: "Aiden Wotton", pLink: "aidenwotton.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Apple Grace Geaslan", pLink: "applegracegeaslan.com"},
{name: "Bhuvnish Arora", pLink: "bhuvnisharora.com"}
];

portfolios.forEach((portfolio) => {
  const portfolioDiv = document.createElement("div");
  portfolioDiv.classList.add("student-box");

  const portfolioName = document.createElement("h3");
  portfolioName.textContent = portfolio.name;

  const portfolioLink = document.createElement("a");
  portfolioLink.href = `https://${portfolio.pLink}`;
  portfolioLink.target = "_blank";
  portfolioLink.textContent = portfolio.pLink;

  portfolioDiv.appendChild(portfolioName);
  portfolioDiv.appendChild(portfolioLink);
  portfolioCon.appendChild(portfolioDiv);
});