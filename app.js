const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text", {y:"0%", duration: 1, stagger:0.25} )
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5})
tl.to(".short-intro",{y:"-100%",duration:1}, "-=1")
tl.fromTo(".intro",{opacity:0},{opacity:1, duration:1})

const modal = document.querySelector('.popup');
const closebtn = document.querySelector('.popup h6');
const contact = document.querySelector('.get-in');


contact.addEventListener('click', ()=>{
    modal.classList.add('open')
})

closebtn.addEventListener('click', (e)=>{
    modal.classList.remove('open')
})
