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
  {name: "Rodriguez-Ram Diego", pLink: "rodriguezramdiego.com"},
  {name: "Cooper Kayla", pLink: "cooperkayla.com"},
  {name: "Lozon Ramona", pLink: "lozonramona.com"},
  {name: "Chen Qingdong", pLink: "chenqingdong.com"},
  {name: "Khan Taylor", pLink: "khantaylor.com"},
  {name: "Bilyea Issac", pLink: "bilyeaissac.com"},
  {name: "Carriere Ezra", pLink: "carriereezra.com"},
  {name: "Salwan Shauraya", pLink: "salwanshauraya.com"},
  {name: "Reji Vazhavilay Rebin", pLink: "rejivazhavilayrebin.com"},
  {name: "Saddul Divij", pLink: "sadduldivij.com"},
  {name: "Park Kyuri", pLink: "parkkyuri.com"},
  {name: "Meijer Nikolai", pLink: "meijernikolai.com"},
  {name: "Hanbury Xaviere", pLink: "hanburyxaviere.com"},
  {name: "Buck Amari", pLink: "buckamari.com"},
  {name: "Parmar Meet", pLink: "parmarmeet.com"},
  {name: "Reyes Justin Rian", pLink: "reyesjustinrian.com"},
  {name: "Yantizhanov Alisher", pLink: "yantizhanovalisher.com"},
  {name: "Thakur Parvesh", pLink: "thakurparvesh.com"},
  {name: "Damen Meghan", pLink: "damenmeghan.com"},
  {name: "Amzad Omar Saif", pLink: "amzadomarsaif.com"},
  {name: "Zhang Bozhi", pLink: "zhangbozhi.com"},
  {name: "Chu Qia-Yi", pLink: "chuqiayi.com"},
  {name: "Maxwell Sashoye", pLink: "maxwellsashoye.com"},
  {name: "Bondarchuk Dina", pLink: "bondarchukdina.com"},
  {name: "Okutepa Wisdom Utenwojo", pLink: "okutepawisdomutenwojo.com"},
  {name: "Macapagal Bernardo Jr", pLink: "macapagalbernardojr.com"},
  {name: "Celis Ezekiel John", pLink: "celisezekieljohn.com"},
  {name: "Macadams Katrina", pLink: "macadamskatrina.com"},
  {name: "El Maniary Ali", pLink: "elmaniaryali.com"},
  {name: "Yam Lok ting Tina", pLink: "yamloktingtina.com"},
  {name: "Nguyen Thi Thanh Thuong", pLink: "nguyenthithanhthuong.com"},
  {name: "Evangel Jennifer", pLink: "evangeljennifer.com"},
  {name: "Rodrigo", pLink: "rodrigo.com"},
  {name: "Gabbasova millana", pLink: "gabbasovamillana.com"},
  {name: "Izel Esteban", pLink: "izelesteban.com"},
  {name: "sit loi", pLink: "sitloi.com"},
  {name: "Flore Timothy Bryle", pLink: "floretimothybryle.com"},
  {name: " NapasPolchai", pLink: "napaspolchai.com"},
  {name: "Singh Akamjot", pLink: "singhakamjot.com"},
  {name: "Opadele Emmanuel", pLink: "opadeleemmanuel.com"},
  {name: "Sojan Shon", pLink: "sojanshon.com"},
  {name: "Ishan Mehra", pLink: "ishanmehra.com"},
  {name: "Biju Shiyon", pLink: "bijushiyon.com"},
  {name: "Jashan Kumar", pLink: "jashankumar.com"},
  {name: "Dhaliwal Meetinder Singh", pLink: "dhaliwalmeetindersingh.com"},
  {name: "Harnoorpreet Kaur", pLink: "harnoorpreetkaur.com"},
  {name: "Apapat", pLink: "apapat.com"},
  {name: "Bandarra Sydney", pLink: "bandarrasydney.com"},
  {name: "Ogbeide Osarieme", pLink: "ogbeideosarieme.com"},
  {name: "Huertas Tanya", pLink: "huertasytanya.com"},
  {name: "Carlos Cano", pLink: "carloscano.com"},
  {name: "Bishokarma Kamana", pLink: "bishokarmakamana.com"},
  {name: "Sham King Yin", pLink: "shamkingyin.com"},
  {name: "Benipal Tapshveer", pLink: "benipaltapshveer.com"},
  {name: "Laput Dixie Marie", pLink: "laputdixiemarie.com"},
  {name: "Faizan Khan", pLink: "faizankhan.com"},
  {name: "Lie Keith", pLink: "liekeith.com"},
  {name: "Gamborgi Henrique", pLink: "gamborgihenrique.com"},
  {name: "Mahaittidon Natchanon", pLink: "mahaittidonnatchanon.com"},
  {name: "Chan Wing Lam Stephanie", pLink: "chanwinglamstephanie.com"},
  {name: "Lai Yi ting", pLink: "laiyiting.com"},
  {name: "Gohetia Sheldon", pLink: "gohetiasheldon.com"},
  {name: "Gregory Joyal", pLink: "gregoryjoyal.com"},
  {name: "Sidhu Sukhbag", pLink: "sidhusukhbag.com"},
  {name: "Het Shah", pLink: "hetshah.com"},
  {name: "Lav Patel", pLink: "lavpatel.com"},
  {name: "Da-Silva Simon", pLink: "dasilvasimon.com"},
  {name: "Heshan Jayasinghe", pLink: "heshanjayasinghe.com"},
  {name: "Ho Gia Khang", pLink: "hogiakhang.com"},
  {name: "Bendzsel Kristina", pLink: "bendzselkristinacom"}
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

