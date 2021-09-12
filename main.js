//GSAP
import { gsap, ScrollTrigger } from "gsap/all"

import simpleParallax from 'simple-parallax-js';

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);

var image = document.getElementsByClassName('barbers');
new simpleParallax(image, { 
	transition: 'cubic-bezier(0,0,0,2)'
});

var image = document.getElementsByClassName('barber3-img');
new simpleParallax(image, { 
	transition: 'cubic-bezier(0,0,0,2)'
});

//PARALLAX
var rellax = new Rellax('.rellax');

gsap.registerPlugin(ScrollTrigger); 

gsap.to('.title', {
    duration: 0.7,
    ease: "power4.easeOut",
    transform: "rotateX(0deg)",
    transform: "perspective(400px)",
    opacity: 1,
    stagger: 0.3
})


gsap.to(".hero__title-bottom", {
    scrollTrigger: {
        trigger: ".bottom-title",
        start: "top 80%",
    },
    duration: 0.7,
    ease: "power4.easeOut",
    transform: "rotateX(0deg)",
    transform: "perspective(400px)",
    opacity: 1,
    stagger: 0.3
});


gsap.to(".barbers", {scale: 0.75, scrollTrigger: {
    trigger: ".barbers-image-container",
    scrub: true
  }})
  