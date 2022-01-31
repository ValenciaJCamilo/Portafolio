const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.a-lang');
const navHomeEl = document.querySelector('.navHome');
const navAboutEl = document.querySelector('.navAbout');
const navSkillsEl = document.querySelector('.navSkills');
const navPortafolioEl = document.querySelector('.navPortafolio');
const navContactEl = document.querySelector('.navContact');
const titleHomeEl = document.querySelector('.titleHome');
const titleAboutEl = document.querySelector('.titleAbout');
const titleSkillsEl = document.querySelector('.titleSkills');
const titlePortafolioEl = document.querySelector('.titlePortafolio');
const titleContactEl = document.querySelector('.titleContact');

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
        titleHomeEl.textContent = data[attr].titleHome;
        titleAboutEl.textContent = data[attr].titleAbout;
        titleSkillsEl.textContent = data[attr].titleSkills;
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        titleContactEl.textContent = data[attr].titleContact;

    });
});

var data = {
    "spanish":{
        "navHome":"Inicio",
        "navAbout":"Sobre mí",
        "navSkills":"Habilidades",
        "navPortafolio":"Portafolio",
        "navContact":"Contacto",
        "titleHome":"Inicio",
        "titleAbout":"Sobre mí",
        "titleSkills":"Habilidades",
        "titlePortafolio":"Portafolio",
        "titleContact":"Contacto"
    },
    "english":{
        "navHome":"Home",
        "navAbout":"About",
        "navSkills":"Skills",
        "navPortafolio":"Portafolio",
        "navContact":"Contact",
        "titleHome":"Home",
        "titleAbout":"About",
        "titleSkills":"Skills",
        "titlePortafolio":"Portafolio",
        "titleContact":"Contact"

    }
}