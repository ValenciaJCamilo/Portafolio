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
const aboutTxt1El = document.querySelector('.aboutTxt1');
const aboutTxt2El = document.querySelector('.aboutTxt2');
const aboutTxt3El = document.querySelector('.aboutTxt3');
const aboutTxt4El = document.querySelector('.aboutTxt4');
const aboutTxt5El = document.querySelector('.aboutTxt5');
const aboutTxt6El = document.querySelector('.aboutTxt6');
const aboutTxt7El = document.querySelector('.aboutTxt7');
const aboutMsg1El = document.querySelector('.aboutMsg1');
const aboutMsg2El = document.querySelector('.aboutMsg2');
/*SKILLS*/
const titleSkillsEl = document.querySelector('.titleSkills');
const subtitleSkillsEl = document.querySelector('.subtitleSkills');
const skillsTxt1El = document.querySelector('.skillsTxt1');
const skillsTxt2El = document.querySelector('.skillsTxt2');
const skillsTxt3El = document.querySelector('.skillsTxt3');
const skillsTxt4El = document.querySelector('.skillsTxt4');
const skillsTxt5El = document.querySelector('.skillsTxt5');
const skillsTxt6El = document.querySelector('.skillsTxt6');
const skillsTxt7El = document.querySelector('.skillsTxt7');
const skillsTxt8El = document.querySelector('.skillsTxt8');
const skillsTxt9El = document.querySelector('.skillsTxt9');
const skillsTxt10El = document.querySelector('.skillsTxt10');
const skillsTxt11El = document.querySelector('.skillsTxt11');
const skillsTxt12El = document.querySelector('.skillsTxt12');
const skillsTxt13El = document.querySelector('.skillsTxt13');
const skillButton1El = document.querySelector('.skillButton1');
const skillButton2El = document.querySelector('.skillButton2');
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
const workItem1El = document.querySelector('.workItem1');
const workItem2El = document.querySelector('.workItem2');
const workItem3El = document.querySelector('.workItem3');
const workItem4El = document.querySelector('.workItem4');
const descKidiMathEl = document.querySelector('.descKidiMath');
const descKingdomAppEl = document.querySelector('.descKingdomApp');
const descBatatabitEl = document.querySelector('.descBatatabit');
const descCartasEl = document.querySelector('.descCartas');
const descVacunappEl = document.querySelector('.descVacunapp');
const titleHistUsEl = document.querySelector('.titleHistUs');
const descHistUsEl = document.querySelector('.descHistUs');
const titleGoogleEl = document.querySelector('.titleGoogle');
const descGoogleEl = document.querySelector('.descGoogle');
const worksMsg1El = document.querySelector('.worksMsg1');
const worksMsg2El = document.querySelector('.worksMsg2');
const worksMsg3El = document.querySelector('.worksMsg3');
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
        aboutTxt1El.textContent = data[attr].aboutTxt1;
        aboutTxt2El.textContent = data[attr].aboutTxt2;
        aboutTxt3El.textContent = data[attr].aboutTxt3;
        aboutTxt4El.textContent = data[attr].aboutTxt4;
        aboutTxt5El.textContent = data[attr].aboutTxt5;
        aboutTxt6El.textContent = data[attr].aboutTxt6;
        aboutTxt7El.textContent = data[attr].aboutTxt7;
        aboutMsg1El.textContent = data[attr].aboutMsg1;
        aboutMsg2El.textContent = data[attr].aboutMsg2;
        /*SKILLS*/
        titleSkillsEl.textContent = data[attr].titleSkills;
        subtitleSkillsEl.textContent = data[attr].subtitleSkills;
        skillsTxt1El.textContent = data[attr].skillsTxt1;
        skillsTxt2El.textContent = data[attr].skillsTxt2;
        skillsTxt3El.textContent = data[attr].skillsTxt3;
        skillsTxt4El.textContent = data[attr].skillsTxt4;
        skillsTxt5El.textContent = data[attr].skillsTxt5;
        skillsTxt6El.textContent = data[attr].skillsTxt6;
        skillsTxt7El.textContent = data[attr].skillsTxt7;
        skillsTxt8El.textContent = data[attr].skillsTxt8;
        skillsTxt9El.textContent = data[attr].skillsTxt9;
        skillsTxt10El.textContent = data[attr].skillsTxt10;
        skillsTxt11El.textContent = data[attr].skillsTxt11;
        skillsTxt12El.textContent = data[attr].skillsTxt12;
        skillsTxt13El.textContent = data[attr].skillsTxt13;
        skillButton1El.textContent = data[attr].skillButton1;
        skillButton2El.textContent = data[attr].skillButton2;
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
        worksMsg1El.textContent = data[attr].worksMsg1;
        worksMsg2El.textContent = data[attr].worksMsg2;
        worksMsg3El.textContent = data[attr].worksMsg3;
        /*PORTFOLIO*/
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        subtitlePortafolioEl.textContent = data[attr].subtitlePortafolio;
        workItem1El.textContent = data[attr].workItem1;
        workItem2El.textContent = data[attr].workItem2;
        workItem3El.textContent = data[attr].workItem3;
        workItem4El.textContent = data[attr].workItem4;
        descKidiMathEl.textContent = data[attr].descKidiMath;
        descKingdomAppEl.textContent = data[attr].descKingdomApp;
        descBatatabitEl.textContent = data[attr].descBatatabit;
        descCartasEl.textContent = data[attr].descCartas;
        descVacunappEl.textContent = data[attr].descVacunapp;
        titleHistUsEl.textContent = data[attr].titleHistUs;
        descHistUsEl.textContent = data[attr].descHistUs;
        titleGoogleEl.textContent = data[attr].titleGoogle;
        descGoogleEl.textContent = data[attr].descGoogle;
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
        "aboutTxt1":"Me encuentro cursando mi último año de Ingeniería de Sistemas y estoy enfocado en el ",
        "aboutTxt2":"desarrollo web",
        "aboutTxt3":", en la experiencia de usuario ",
        "aboutTxt4":"(UX) ",
        "aboutTxt5":"y en el diseño de interfaces ",
        "aboutTxt6":"(UI)",
        "aboutTxt7":". Mi pasión es poder brindarle a las personas una experiencia bastante agradable al momento de navegar por la web, todo esto con el uso de nuevas tecnologías. ",
        "aboutMsg1":"\"Nunca pares",
        "aboutMsg2":"de aprender\"",
        /*SKILLS*/
        "titleSkills":"Habilidades",
        "subtitleSkills":"Trato de mejorar",
        "skillsTxt1":"Durante el paso del tiempo, he podido dominar algunas tecnologías, y esto ha sido posible gracias a la ",
        "skillsTxt2":"educación online",
        "skillsTxt3":", principalmente la que ",
        "skillsTxt4":"Platzi ",
        "skillsTxt5":"ofrece. Dejo por aquí mi perfil por si es de interés, así como las ",
        "skillsTxt6":"certificaciones ",
        "skillsTxt7":"que he obtenido. ",
        "skillsTxt8":"Dejando esto de lado, soy capaz de diseñar y de crear sitios web estáticos o dinámicos que sean completamente ",
        "skillsTxt9":"responsivos ",
        "skillsTxt10":"y amigables con el usuario, puedo llevar el seguimiento de los proyectos mediante un ",
        "skillsTxt11":"sistema de control de versiones",
        "skillsTxt12":", y además, estoy capacitado para trabajar colaborativamente con la ",
        "skillsTxt13":"metodología Scrum.",
        "skillButton1":"Ver perfil",
        "skillButton2":"Ver certificaciones",
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
        "workItem1":"Todo",
        "workItem2":"Web",
        "workItem3":"Diseño",
        "workItem4":"Otros",
        "descKidiMath":"Sitio Web para poder realizar sencillas operaciones matemáticas, como por ejemplo, hallar el valor de productos con descuento, o hacer cálculos de préstamos.",
        "descKingdomApp":"Diseño de interfaces gráficas de una tienda virtual en línea de artículos electrónicos, como celulares, computadores, electrodomésticos, entre otros.",
        "descBatatabit":"Landing Page de \"Batatabit\" que simula ser una empresa que le ofrece a los usuarios unos planes para que estos puedan estar al día de todo lo que sucede con la economía digital.",
        "descCartas":"Este es un pequeño juego para ejercitar la memoria. Acá el usuario tendrá dos modalidades para poner a prueba su retentiva de manera divertida.",
        "descVacunapp":"En este proyecto hecho por fines educativos, se implementa el algoritmo de Dijkstra para poder hallar el camino más corto, con el fin de agilizar las entregas de vacunas.",
        "titleHistUs":"Historias de Usuario",
        "descHistUs":"Proyecto realizado con fines académicos en el cual participamos un total de 3 estudiantes. En este, me encargué de realizar la documentación y la implementación de interfaces.",
        "titleGoogle":"Clon de Google",
        "descGoogle":"Este es un clon exacto del buscador de Google en su versión principal, con el fin de poner a prueba mi capacidad visual para replicar la interfaz gráfica del navegador.",
        "worksMsg1":"\"Mantente con",
        "worksMsg2":"personas que te",
        "worksMsg3":"hagan mejorar\"",
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
        "aboutTxt1":"I am in my last year of Systems Engineering and I'm focused on ",
        "aboutTxt2":"web development",
        "aboutTxt3":", user experience ",
        "aboutTxt4":"(UX) ",
        "aboutTxt5":"and user interface ",
        "aboutTxt6":"(UI)",
        "aboutTxt7":". My passion is to provide people with a pleasant experience when surfing the web, all this with the use of new technologies. ",
        "aboutMsg1":"\"Never stop",
        "aboutMsg2":"learning\"",
        /*SKILLS*/
        "titleSkills":"Skills",
        "subtitleSkills":"I try to improve",
        "skillsTxt1":"Over time, I've been able to master some technologies, and this has been possible thanks to  ",
        "skillsTxt2":"online education",
        "skillsTxt3":", mainly the one ",
        "skillsTxt4":"Platzi ",
        "skillsTxt5":"offers. I leave here my profile in case it's of interest, as well as the  ",
        "skillsTxt6":"certifications ",
        "skillsTxt7":"I've obtained.",
        "skillsTxt8":"Leaving this aside, I'm capable of design and create static or dynamic websites that are fully ",
        "skillsTxt9":"responsive ",
        "skillsTxt10":"and user friendly, I can keep track of projects through ",
        "skillsTxt11":"version control system",
        "skillsTxt12":", and I'm also able to work collaboratively with the ",
        "skillsTxt13":"Scrum methodology.",
        "skillButton1":"View profile",
        "skillButton2":"View certifications",
        "skillsTitleCard1":"Hard skills",
        "skillsTitleCard2":"Soft skills",
        "soft1":"Organized",
        "soft2":"Disciplined",
        "soft3":"Productive",
        "soft4":"Assertive",
        "soft5":"Creative",
        "soft6":"Adaptable",
        "skillsMsg1":"\"Rome was ",
        "skillsMsg2":"not built",
        "skillsMsg3":"in a day\"",
        /*PORTFOLIO*/
        "titlePortafolio":"Portfolio",
        "subtitlePortafolio":"My work",
        "workItem1":"All",
        "workItem2":"Web",
        "workItem3":"Design",
        "workItem4":"Others",
        "descKidiMath":"Web site to perform simple mathematical operations, such as finding the value of discounted products, or performing loan calculations.",
        "descKingdomApp":"Design of graphic interfaces for an online virtual store of electronic items, such as cell phones, computers, home appliances, among others.",
        "descBatatabit":"Landing Page of \"Batatabit\" that pretends to be a company that offers users some plans so they can keep up to date with everything that happens with the digital economy.",
        "descCartas":"This is a mini-game to exercise memory. Here the user will have two modes to test his retentiveness in a fun way.",
        "descVacunapp":"In this educational project, Dijkstra's algorithm is applied to find the shortest path to expedite vaccine delivery.",
        "titleHistUs":"User Stories",
        "descHistUs":"Project carried out for academic purposes in which a total of 3 students participated. In this project, I was in charge of the documentation and implementation of interfaces.",
        "titleGoogle":"Google Clone",
        "descGoogle":"This is an exact clone of the Google search engine in its main version, in order to test my visual ability to replicate the browser's graphical interface.",
        "worksMsg1":"\"Stay with",
        "worksMsg2":"people who",
        "worksMsg3":"make u better\"",
        /*CONTACT*/
        "titleContact":"Contact",
        "subtitleContact":"What's next?",

    }
}