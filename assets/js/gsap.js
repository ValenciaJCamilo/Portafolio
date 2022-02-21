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
