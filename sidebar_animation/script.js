var menu = document.querySelector('nav i')
var cross = document.querySelector("#sidebar i")

var tl = gsap.timeline()

tl.to('#sidebar',{
    right: 0,
    duration: 1,
})

tl.from('#sidebar h2',{
    x:150,
    duration: 1,
    stagger: 0.2,
    opacity: 0,
    // ease: "power3.out"
})

tl.from('#sidebar i',{
    opacity: 0,
})

tl.pause()  // same as gsap.timeline({paused: true})

menu.addEventListener('click',()=>{
    console.log("clicked")
    tl.play();
})

cross.addEventListener('click',()=>{
    console.log("clicked")
    tl.reverse();
})