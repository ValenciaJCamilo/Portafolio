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
const subtitleSkillsEl = document.querySelector('.subtitleSkills');
const skillsTxt1El = document.querySelector('.skillsTxt1');
const skillButtonEl = document.querySelector('.skillButton');
const skillsTxt2El = document.querySelector('.skillsTxt2');
const skillsTitleCard1El = document.querySelector('.skillsTitleCard1');
const skillsTitleCard2El = document.querySelector('.skillsTitleCard2');
const soft1El = document.querySelector('.soft1');
const soft2El = document.querySelector('.soft2');
const soft3El = document.querySelector('.soft3');
const soft4El = document.querySelector('.soft4');
const soft5El = document.querySelector('.soft5');
const soft6El = document.querySelector('.soft6');
const skillsMsg1El = document.querySelector('.skillsMsg1');
const skillsMsg2El = document.querySelector('.skillsMsg2');
const skillsMsg3El = document.querySelector('.skillsMsg3');
/*PORTFOLIO*/
const titlePortafolioEl = document.querySelector('.titlePortafolio');
const subtitlePortafolioEl = document.querySelector('.subtitlePortafolio');
/*CONTACT*/
const titleContactEl = document.querySelector('.titleContact');
const subtitleContactEl = document.querySelector('.subtitleContact');


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
        subtitleSkillsEl.textContent = data[attr].subtitleSkills;
        skillsTxt1El.textContent = data[attr].skillsTxt1;
        skillButtonEl.textContent = data[attr].skillButton;
        skillsTxt2El.textContent = data[attr].skillsTxt2;
        skillsTitleCard1El.textContent = data[attr].skillsTitleCard1;
        skillsTitleCard2El.textContent = data[attr].skillsTitleCard2;
        soft1El.textContent = data[attr].soft1;
        soft2El.textContent = data[attr].soft2;
        soft3El.textContent = data[attr].soft3;
        soft4El.textContent = data[attr].soft4;
        soft5El.textContent = data[attr].soft5;
        soft6El.textContent = data[attr].soft6;
        skillsMsg1El.textContent = data[attr].skillsMsg1;
        skillsMsg2El.textContent = data[attr].skillsMsg2;
        skillsMsg3El.textContent = data[attr].skillsMsg3;
        /*PORTFOLIO*/
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        subtitlePortafolioEl.textContent = data[attr].subtitlePortafolio;
        /*CONTACT*/
        titleContactEl.textContent = data[attr].titleContact;
        subtitleContactEl.textContent = data[attr].subtitleContact;

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
        "subtitleSkills":"Trato de mejorar",
        "skillsTxt1":"Durante el paso el tiempo, he podido dominar algunas tecnologías, y esto ha sido posible gracias a la educación online, principalmente la que Platzi ofrece. Dejo por aquí mi perfil por si es de interés.",
        "skillButton":"Ver perfil",
        "skillsTxt2":"Dejando esto de lado, soy capaz de diseñar y de crear sitios web dinámicos que sean completamente responsivos y amigables con el usuario, puedo llevar el seguimiento de los proyectos mediante un sistema de control de versiones, y además, estoy capacitado para trabajar colaborativamente con la metodología Scrum.",
        "skillsTitleCard1":"Habilidades técnicas",
        "skillsTitleCard2":"Habilidades blandas",
        "soft1":"Organizado",
        "soft2":"Disciplinado",
        "soft3":"Productivo",
        "soft4":"Asertivo",
        "soft5":"Creativo",
        "soft6":"Adaptable",
        "skillsMsg1":"\"Roma no se",
        "skillsMsg2":"construyó",
        "skillsMsg3":"en un día\"",
        /*PORTFOLIO*/
        "titlePortafolio":"Portafolio",
        "subtitlePortafolio":"Mi trabajo",
        /*CONTACT*/
        "titleContact":"Contacto",
        "subtitleContact":"¿Qué sigue?",

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
        "aboutTxt":"I am in my last year of Systems Engineering and I'm focused on web development, user experience (UX) and user interface (UI). My passion is to provide people with a pleasant experience when surfing the web, all this with the use of new technologies.",
        "aboutMsg1":"\"Never stop",
        "aboutMsg2":"learning\"",
        /*SKILLS*/
        "titleSkills":"Skills",
        "subtitleSkills":"I try to improve",
        "skillsTxt1":"As time goes by, I've been able to master some technologies, and this has been possible thanks to online education, mainly the one offered by Platzi. I leave here my profile in case it's of interest.",
        "skillButton":"View profile",
        "skillsTxt2":"Leaving this aside, I'm able to design and create dynamic websites that are fully responsive and user friendly, I can keep track of projects through a version control system, and I'm capable to work collaboratively with Scrum methodology.",
        "skillsTitleCard1":"Hard skills",
        "skillsTitleCard2":"Soft skills",
        "soft1":"Organized",
        "soft2":"Disciplined",
        "soft3":"Productive",
        "soft4":"Assertive",
        "soft5":"Creative",
        "soft6":"Adaptable",
        "skillsMsg1":"\"Rome wasn't ",
        "skillsMsg2":"built",
        "skillsMsg3":"in a day\"",
        /*PORTFOLIO*/
        "titlePortafolio":"Portfolio",
        "subtitlePortafolio":"My work",
        /*CONTACT*/
        "titleContact":"Contact",
        "subtitleContact":"What's next?",

    }
}