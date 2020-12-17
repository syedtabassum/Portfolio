const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text", {y:"0%", duration: 1, stagger:0.25} )
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5})
tl.to(".short-intro",{y:"-100%",duration:1}, "-=1")
tl.fromTo(".intro",{opacity:0},{opacity:1, duration:1})


// .................photo slide...............
window.onload = function(){
const photo = document.querySelector('.photo');
const images = document.querySelector('.pictures');
window.addEventListener('scroll', scrolleffect);


function scrolleffect(e){
    console.log(window.scrollY);
    if(window.scrollY>=500){
        photo.classList.add('open');
    }
    else{
        photo.classList.remove('open');

    }
    if(window.scrollY>=1400){
        
        // tl.to(".pictures", {y:"0%", duration: 1, stagger:0.25});
        images.classList.add('animi');
    }
    else{
        images.classList.remove('animi');
    }
}

}



