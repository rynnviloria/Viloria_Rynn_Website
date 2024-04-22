gsap.registerPlugin(ScrollTrigger);

gsap.from('.card',{
    y: 400,
    opacity: 0,
    duration: 10,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: '.container-flex',
        start: "top 80%",
        scrub: true,
    }
});

gsap.from('#image',{
    xPercent: -100,
    duration: 10,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.image-anim',
        scrub: true,
    }
});

gsap.from('#text',{
    xPercent: 100,
    duration: 10,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.image-anim',
        scrub: true,
    }
});

gsap.from ('.scale--anim',{
    scale: 400,
})