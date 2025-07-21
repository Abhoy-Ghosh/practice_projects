gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+2000",  // controls scroll distance
    scrub: true,   // smooth scroll sync
    pin: true,
    // markers: true  // remove in production
  }
});

tl.to("#car", {
  x: "500%",
  duration: 2,
  ease: "power2.inOut"
}, 0.3);

tl.to("#cover", {
  x: "68%",
  duration: 2,
  ease: "power2.inOut"
}, 0.4);