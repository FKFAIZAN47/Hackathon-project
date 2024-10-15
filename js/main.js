// Variables
const player = new Plyr('video');
const navLinks = document.querySelectorAll("nav a");

// Functions
function smoothScroll(e) {
  e.preventDefault(); 
  
  const sectionID = this.getAttribute("href").substring(1);
  const targetSection = document.getElementById(sectionID);
  
  // Smooth scroll to the target section
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });
});


// Portfolios 

const portfolioCon = document.querySelector("#portfolio-con");

const portfolios = [
{name: "Rodriguez-Ram Diego", pLink: "rodriguez-ramdiego.com"},
{name: "Cooper Kayla", pLink: "cooperkayla.com"},
{name: "Lozon Ramona", pLink: "lozonramona.com"},
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


// Testimonials


const testimonials = [
  { name: "- Aimee Hagerty, co-founder and board member for Foundation Sixty6", testimonial: "These amazing students bring fresh perspectives and innovative ideas to the table. Their dedication to the project is truly inspiring,"}, 
  { name: "- Bill Hagerty, co-founder and board member for Foundation Sixty6", testimonial: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting youth mental health."},
  { name: "- Marco De Luca, IDP Program coordinator and professor for Fanshawe", testimonial: "Observing the students collaborating with Foundation Sixty6 has been an inspiring journey. The creativity and skill displayed by the students have been truly outstanding."}
];

const testimonialCon = document.querySelector("#testimonial-con");   

testimonials.forEach((testimonial) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("testimonial-box");

  const testimonialParagraph = document.createElement("p");
  const testimonialName = document.createElement("h3");

  testimonialParagraph.textContent = `${testimonial.testimonial}`;
  testimonialName.textContent = testimonial.name;

  testimonialDiv.appendChild(testimonialParagraph);
  testimonialDiv.appendChild(testimonialName);
  testimonialCon.appendChild(testimonialDiv);
});

