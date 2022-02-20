/**
 * @author Camilo Valencia
 */
/*========================= SCROLL SECTIONS ACTIVE LINK =========================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== TYPED ===============*/
const typed = new Typed('.typed', {
	strings: [
		'<i class="homeEducation1">Estudiante de Ingeniería de Sistemas</i>',
		'<i class="homeEducation2">Desarrollador Frontend</i>'
	],

	//stringsElement: '#text-education', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 18, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	//showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:1400,
    delay:0,
    //reset:true,
})

/*sr.reveal(`.home__name`,{delay:500,origin:'left',distance:'20px',})*/
sr.reveal(`.home__greeting`)
sr.reveal(`.home__name`,{delay:500,distance:"30px",origin:'bottom'})
sr.reveal(`.home__education`,{delay:1000})
sr.reveal(`.letters`,{delay:500,distance:"50px",origin:'top'})
sr.reveal(`.circle-half`,{delay:500,distance:"100px",origin:'top',reset:true})
sr.reveal(`.square`,{delay:1000,distance:"90px",origin:'right',reset:true})
sr.reveal(`.arrow`,{delay:1500,distance:"320px",origin:'left',reset:true})
sr.reveal(`.home__buttons`,{delay:1800})
sr.reveal(`.home__handle`,{delay:1800})
sr.reveal(`.home__social`,{delay:1800,origin:'bottom'})
/*About*/
sr.reveal(`.titleAbout`,{origin:'bottom'})
sr.reveal(`.about__image`,{origin:'left'})
sr.reveal(`.about__info`,{origin:'right'})
sr.reveal(`.aboutMsg1`,{origin:'right',distance:"200px",delay:200})
sr.reveal(`.aboutMsg2`,{origin:'left',distance:"200px",delay:400})
sr.reveal(`.palette`,{distance:"100px",origin:'left',reset:true})
sr.reveal(`.hive`,{distance:"90px",origin:'bottom',reset:true})
sr.reveal(`.happy`,{distance:"200px",origin:'top',reset:true})
/*Skills*/
sr.reveal(`.titleSkills`,{origin:'bottom'})
sr.reveal(`.skills__image`,{origin:'top',delay:100,distance:"150px"})
sr.reveal(`.skills__info`,{origin:'left'})
sr.reveal(`.skillsButtonContainer`)
sr.reveal(`.skills__content`,{origin:'bottom',delay:200})
sr.reveal(`.skillsMsg1`,{origin:'right',distance:"200px",delay:50})
sr.reveal(`.skillsMsg2`,{origin:'left',distance:"200px",delay:50})
sr.reveal(`.skillsMsg3`,{origin:'right',distance:"200px",delay:50})
sr.reveal(`.pyramid`,{distance:"100px",origin:'left',reset:true})
sr.reveal(`.extension`,{distance:"300px",origin:'bottom',reset:true})
sr.reveal(`.plus`,{distance:"200px",origin:'top',reset:true})
/*Work*/
sr.reveal(`.titlePortafolio`,{origin:'bottom'})
sr.reveal(`.work__filters`,{origin:'top'})
sr.reveal(`.work__card`,{origin:'bottom'})
sr.reveal(`.group`,{distance:"100px",origin:'left',reset:true})
sr.reveal(`.target`,{distance:"90px",origin:'bottom',reset:true})
sr.reveal(`.chevrons`,{distance:"50px",origin:'top',reset:true})
/*Contact*/
sr.reveal(`.titleContact`,{origin:'bottom'})
sr.reveal(`.contactText`,{origin:'top'})
sr.reveal(`.waycontactTitle`)
sr.reveal(`.contact__card1`,{origin:'left',delay:50})
sr.reveal(`.contact__card2`,{origin:'right',delay:80})
sr.reveal(`.contact__card3`,{origin:'left',delay:100})
sr.reveal(`.formcontactTitle`)
sr.reveal(`.contact__form`)

/*=============== LOADING ANIMATION ===============*/
/*If we don't put this function, the navbar isn't gonna work, will be blocked*/
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
setInterval(loader, 0);
}

window.onload = fadeOut();


/*=============== GSAP & SCROLLTRIGGER ===============*/
let bgImageAbout = document.querySelector(".about__phrase_bgr");
let bgImageSkill = document.querySelector(".skill__phrase_bgr");
//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);
// Now we are going to animate
// TRIANGLE - ABOUT ANIMATION
gsap.fromTo(
  bgImageAbout,
  {
    clipPath: "circle(3% at 77% 40%)",
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    //  We want to do that animation on scroll
    scrollTrigger: {
      trigger: bgImageAbout,
      scrub: 1,
      start: "top center",
      end: "bottom center-=-100",
    },
  }
);
// HEXAGON - SKILL ANIMATION
gsap.fromTo(
  bgImageSkill,
  {
    clipPath: "circle(3% at 77% 40%)",
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    //  We want to do that animation on scroll
    scrollTrigger: {
      trigger: bgImageSkill,
      scrub: 3,
      start: "top center",
      end: "bottom center-=-100",
    },
  }
);

/*=============== MIXITUP ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 0
  }
});
/*Link active work*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l=>l.classList.remove('active-work'))
  this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener('click',activeWork))


/*=============== FORM ===============*/
function validate(){
  let name = document.querySelector(".username")
  let email = document.querySelector(".emailuser")
  let msg = document.querySelector(".messageuser")
  let submit = document.querySelector(".submit")
  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValido=expReg.test(email.value); 
    if(name.value != "" && email.value != "" && msg.value!= ""){
      if(emailValido==true){
        sendMail(name.value,email.value,msg.value);
        success();
      }
      else{
        mailError(); 
      }
    }
    else{
      inputEmpty();
    }
  })
}
validate();


function sendMail(name,email,msg){
  emailjs.send("service_kqglwjj","template_5t7weyj",{
    from_name: name,
    to_name: email,
    message: msg,
    });
}
function success(){
  swal({
    title:"Mensaje enviado!",
    text:"Muy pronto recibirás una respuesta.",
    icon:"success",
    button:"Ok"
  });
}
function inputEmpty(){
  swal({
    title:"Oops!",
    text:"Debes completar todos los campos.",
    icon:"error",
    button:"Ok"
  });
}
function mailError(){
  swal({
    title:"Hmmm...",
    text:"Revisa el correo electrónico.",
    icon:"warning",
    button:"Ok"
  });
}