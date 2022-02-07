/*NAV BAR*/
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.a-lang');
const navHomeEl = document.querySelector('.navHome');
const navAboutEl = document.querySelector('.navAbout');
const navSkillsEl = document.querySelector('.navSkills');
const navPortafolioEl = document.querySelector('.navPortafolio');
const navContactEl = document.querySelector('.navContact');
/*HOME*/
const homeGreetingEl = document.querySelector('.homeGreeting');
const homeNameEl = document.querySelector('.homeName');
const homeEducationEl = document.querySelector('.homeEducation');
const homeButtonDownloadEl = document.querySelector('.homeButtonDownload');
const homeButtonAboutEl = document.querySelector('.homeButtonAbout');
/*ABOUT*/
const titleAboutEl = document.querySelector('.titleAbout');
const aboutTxtEl = document.querySelector('.aboutTxt');
const aboutMsg1El = document.querySelector('.aboutMsg1');
const aboutMsg2El = document.querySelector('.aboutMsg2');
/*SKILLS*/
const titleSkillsEl = document.querySelector('.titleSkills');
/*PORTFOLIO*/
const titlePortafolioEl = document.querySelector('.titlePortafolio');
/*CONTACT*/
const titleContactEl = document.querySelector('.titleContact');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.lang-active').classList.remove('lang-active');
        el.classList.add('lang-active');

        const attr = el.getAttribute('language');

        /*NAV BAR*/
        navHomeEl.textContent = data[attr].navHome;
        navAboutEl.textContent = data[attr].navAbout;
        navSkillsEl.textContent = data[attr].navSkills;
        navPortafolioEl.textContent = data[attr].navPortafolio;
        navContactEl.textContent = data[attr].navContact;
        /*HOME*/
        homeGreetingEl.textContent = data[attr].homeGreeting;
        homeNameEl.textContent = data[attr].homeName;
        homeEducationEl.textContent = data[attr].homeEducation;
        homeButtonDownloadEl.textContent = data[attr].homeButtonDownload;
        homeButtonAboutEl.textContent = data[attr].homeButtonAbout;
        /*ABOUT*/
        titleAboutEl.textContent = data[attr].titleAbout;
        aboutTxtEl.textContent = data[attr].aboutTxt;
        aboutMsg1El.textContent = data[attr].aboutMsg1;
        aboutMsg2El.textContent = data[attr].aboutMsg2;
        /*SKILLS*/
        titleSkillsEl.textContent = data[attr].titleSkills;
        /*PORTFOLIO*/
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        /*CONTACT*/
        titleContactEl.textContent = data[attr].titleContact;

    });
});

var data = {
    "spanish":{
        /*NAV BAR*/
        "navHome":"Inicio",
        "navAbout":"Sobre mí",
        "navSkills":"Habilidades",
        "navPortafolio":"Portafolio",
        "navContact":"Contacto",
        /*HOME*/
        "homeGreeting":"Hola, yo soy",
        "homeName":"Camilo Valencia",
        "homeEducation":"ㅤDesarrollador Frontendㅤ",
        "homeButtonDownload":"Descargar CV",
        "homeButtonAbout":"Conóceme más",
        /*ABOUT*/
        "titleAbout":"Sobre mí",
        "aboutTxt":"Me encuentro cursando mi último año de Ingeniería de Sistemas y estoy enfocado en el desarrollo web, en la experiencia de usuario (UX) y en el diseño de interfaces (UI). Mi pasión es poder brindarle a las personas una experiencia bastante agradable al momento de navegar por la web, todo esto con el uso de nuevas tecnologías.",
        "aboutMsg1":"\"Nunca pares",
        "aboutMsg2":"de aprender\"",
        /*SKILLS*/
        "titleSkills":"Habilidades",
        /*PORTFOLIO*/
        "titlePortafolio":"Portafolio",
        /*CONTACT*/
        "titleContact":"Contacto",

    },
    "english":{
        /*NAV BAR*/
        "navHome":"Home",
        "navAbout":"About",
        "navSkills":"Skills",
        "navPortafolio":"Portfolio",
        "navContact":"Contact",
        /*HOME*/
        "homeGreeting":"Hi, I am",
        "homeName":"Camilo Valencia",
        "homeEducation":"ㅤFrontend Developerㅤ",
        "homeButtonDownload":"Download CV",
        "homeButtonAbout":"Know me better",
        /*ABOUT*/
        "titleAbout":"About me",
        "aboutTxt":"I am in my last year of Systems Engineering and I'm focused on web development, user experience (UX) and interface design (UI). My passion is to provide people with a pleasant experience when surfing the web, all this with the use of new technologies.",
        "aboutMsg1":"\"Never stop",
        "aboutMsg2":"learning\"",
        /*SKILLS*/
        "titleSkills":"Skills",
        /*PORTFOLIO*/
        "titlePortafolio":"Portfolio",
        /*CONTACT*/
        "titleContact":"Contact",

    }
}