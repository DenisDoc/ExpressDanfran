"use strict";

const btn = document.querySelector(".switch-lang-btn");
const activeBtnRo = document.querySelector(".ro-active");
const activeBtnEn = document.querySelector(".en-active");

const heroTitle = document.querySelector(".hero-titlu");
const heroText = document.querySelector(".hero-text");
const heroAccent = document.querySelector(".hero-accent");

const NavItemOne = document.querySelector(".nav-item-one");
const NavItemTwo = document.querySelector(".nav-item-two");

const asideOne = document.querySelector(".aside-one");
const asideTwo = document.querySelector(".aside-two");
const asideThree = document.querySelector(".aside-three");
const mainTitle = document.querySelector(".main-title");
const mainScTitleOne = document.querySelector(".main-item-one");
const mainScTitleTwo = document.querySelector(".main-item-two");
const mainScTitleThree = document.querySelector(".main-item-three");
const mainTextOne = document.querySelector(".main-text-one");
const mainTextTwo = document.querySelector(".main-text-two");
const mainTextThree = document.querySelector(".main-text-three");
const aboutTitle = document.querySelector(".about-title");
const expressText = document.querySelector(".express-text");
const danfranText = document.querySelector(".danfran-text");
const galleryTitle = document.querySelector(".gallery-title");
const galleryTextOne = document.querySelector(".gallery-text-one");
const galleryTextTwo = document.querySelector(".gallery-text-two");
const galleryBtn = document.querySelector(".gallery-btn");
const contactTitle = document.querySelector(".contact-title");
const contactTelefon = document.querySelector(".contact-telefon");
const contactAddress = document.querySelector(".contact-address");
const contactStreet = document.querySelector(".contact-street");
const contactProgram = document.querySelector(".contact-program");

const classChange = [
  NavItemOne,
  NavItemTwo,
  heroTitle,
  heroText,
  asideOne,
  asideTwo,
  asideThree,
  mainTitle,
  mainScTitleOne,
  mainScTitleTwo,
  mainScTitleThree,
  mainTextOne,
  mainTextTwo,
  mainTextThree,
  aboutTitle,
  expressText,
  danfranText,
  galleryTitle,
  galleryTextOne,
  galleryTextTwo,
  galleryBtn,
  contactTitle,
  contactTelefon,
  contactAddress,
  contactStreet,
  contactProgram,
];
// const changeClass = function (array) {
const textChangeEn = [
  "About us",
  "Gallery",
  "<span>The correct choice</span> when it comes to BIG problems.",
  "With more than 10 years of experience in transportation, Express Agabaritic and Danfran offer oversized transportation services of the highest standard.",
  "Oversize load transport",
  "Freight forwarder",
  "Community Transport",
  "Oversize load transport is our primary focus",
  "Weight",
  "Locations",
  "Sizes",
  "Any weight up to 39500kg",
  "All across Europe",
  "Any size loads",
  "About us",
  "S.C. Express Agabaritic S.R.L. was founded in 2016. It is composed of a young and dynamic team that puts an accent on professionalism and the security of your goods. Express Agabaritic and  Danfran work in close connection so that they can offer you high quality, oversize load transportation. Express Agabaritic have: 1 trailer with 3 axles.",
  "With more than 17 years of experience in transportation and with a highly capable and devoted team, S.C. Danfran S.R.L offers professionalism, punctuality and security when it comes to transporting goods of any kind. Danfran have: 3 platforms of 24 tons, 2 trailers with 4 axles, 1 trailer with 5 axles, 1 trailer with 3 axles, 2 oversized tarpaulins and one gondola.",
  "Photo gallery",
  "TRUST, SECURITY, PROFESSIONALISM!",
  "We will show you an overview of our work.",
  "Gallery",
  "Oversize load transport, Freight forwarder, Community Transportation ",
  "TELEPHONE",
  "ADDRESS",
  "Street",
  "Monday-Friday:",
];

const textChangeRo = [
  "Despre noi",
  "Galerie",
  "<span>Alegerea potrivita</span> când vine vorba de probleme MARI!",
  " Cu peste 10 ani de experiență în domeniul transportului, Express<strong> Agabaritic</strong> și Danfran oferă<strong> servicii de transport agabaritic</strong> la cele mai înalte standarde.",
  "Transport agabaritic",
  "Casă de expediții",
  "Transport comunitate",
  "Trasportul agabaritic constitiue principala noastră ocupație",
  "Greutate",
  "Locații",
  "Dimensiuni",
  "Cu o greutate de până la 39500kg",
  "Transport în toată Europa",
  "Încărcătură de orice dimensiune",
  "Despre noi",
  "SC Express Agabaritic SRL a fost înființată în anul 2016 și este alcătuită dintr-o echipa tânăra și dinamică, care pune accentul pe profesionalism și pe siguranță bunurilor dumneavoastră. Express Agabaritic lucrează în strânsă legătură cu Danfran pentru a va oferi transporturi agabaritice la cele mai înalte standarde. Express Agabaritic dispune de: 1 trailer cu 3 axe.",
  "Cu 17 ani de experiență în domeniul transportului, o echipa experimentată și devotată, SC Danfran SRL oferă seriozitate, punctualitate și siguranță când vine vorba de transportarea bunurilor de orice fel. Danfran dispune de: 3 paltforme de 24 tone, 2 trailere cu 4 axe, 1 trailer cu 5 axe, 1 trailer cu 3 axe, 2 prealte agabaritice, 1 gondola.",
  "Galerie photo",
  "ÎNCREDERE, SIGURANȚĂ, PROFESIONALISM!",
  "Vă punem la dispoziție o parte din lucrările realizate de echipa Express Agabaritic și Danfran.",
  "Galerie",
  "Servicii de transport agabaritic, casă de expediții, transport comunitate.",
  "TELEFON",
  "ADRESĂ",
  "Strada",
  "Luni-Vineri:",
];
btn.addEventListener("click", function () {
  for (let i = 0; i < textChangeEn.length; i++) {
    classChange[i].innerHTML = textChangeEn[i];

    if (classChange[i].classList.contains("en")) {
      classChange[i].innerHTML = textChangeRo[i];
      document.documentElement.setAttribute("lang", "ro-RO");
    } else {
      document.documentElement.setAttribute("lang", "en");
    }
  }
  for (let i = 0; i < classChange.length; i++) {
    classChange[i].classList.toggle("en");
    if (classChange[i].classList.contains("en")) {
      activeBtnEn.classList.add("color");
      activeBtnRo.classList.remove("color");
    } else {
      activeBtnEn.classList.remove("color");
      activeBtnRo.classList.add("color");
    }
  }
});
