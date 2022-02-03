const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.a-lang');
const navHomeEl = document.querySelector('.navHome');
const navAboutEl = document.querySelector('.navAbout');
const navSkillsEl = document.querySelector('.navSkills');
const navPortafolioEl = document.querySelector('.navPortafolio');
const navContactEl = document.querySelector('.navContact');
const titleAboutEl = document.querySelector('.titleAbout');
const titleSkillsEl = document.querySelector('.titleSkills');
const titlePortafolioEl = document.querySelector('.titlePortafolio');
const titleContactEl = document.querySelector('.titleContact');
const homeGreetingEl = document.querySelector('.homeGreeting');
const homeNameEl = document.querySelector('.homeName');
const homeEducationEl = document.querySelector('.homeEducation');
const homeButtonDownloadEl = document.querySelector('.homeButtonDownload');
const homeButtonAboutEl = document.querySelector('.homeButtonAbout');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.lang-active').classList.remove('lang-active');
        el.classList.add('lang-active');

        const attr = el.getAttribute('language');

        navHomeEl.textContent = data[attr].navHome;
        navAboutEl.textContent = data[attr].navAbout;
        navSkillsEl.textContent = data[attr].navSkills;
        navPortafolioEl.textContent = data[attr].navPortafolio;
        navContactEl.textContent = data[attr].navContact;
        titleAboutEl.textContent = data[attr].titleAbout;
        titleSkillsEl.textContent = data[attr].titleSkills;
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        titleContactEl.textContent = data[attr].titleContact;
        homeGreetingEl.textContent = data[attr].homeGreeting;
        homeNameEl.textContent = data[attr].homeName;
        homeEducationEl.textContent = data[attr].homeEducation;
        homeButtonDownloadEl.textContent = data[attr].homeButtonDownload;
        homeButtonAboutEl.textContent = data[attr].homeButtonAbout;
    });
});

var data = {
    "spanish":{
        "navHome":"Inicio",
        "navAbout":"Sobre mí",
        "navSkills":"Habilidades",
        "navPortafolio":"Portafolio",
        "navContact":"Contacto",
        "titleAbout":"Sobre mí",
        "titleSkills":"Habilidades",
        "titlePortafolio":"Portafolio",
        "titleContact":"Contacto",
        "homeGreeting":"Hola, yo soy",
        "homeName":"Camilo Valencia",
        "homeEducation":"ㅤDesarrollador Frontendㅤ",
        "homeButtonDownload":"Descargar CV",
        "homeButtonAbout":"Conóceme más",
    },
    "english":{
        "navHome":"Home",
        "navAbout":"About",
        "navSkills":"Skills",
        "navPortafolio":"Portfolio",
        "navContact":"Contact",
        "titleHome":"Home",
        "titleAbout":"About me",
        "titleSkills":"Skills",
        "titlePortafolio":"Portfolio",
        "titleContact":"Contact",
        "homeGreeting":"Hi, I am",
        "homeName":"Camilo Valencia",
        "homeEducation":"ㅤFrontend Developerㅤ",
        "homeButtonDownload":"Download CV",
        "homeButtonAbout":"Know me better",
    }
}