function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


gsap.to(" .adultcats",{
    
    scrollTrigger:{
        trigger:".ff ",start:"top top",bottom:"bottom bottom" ,scrub:true,pin:true, scroller: "#main",
    },
    transform:"translateY(-85%)",
    behavior: 'smooth',
    duration:50,
    transformOrigin: "top bottom", 
    ease: "none"
    }
)    
gsap.to("#slides",{
    transform:"translateX(-50%)",
    ease:Power1,
    behavior: 'smooth',transformOrigin: "left center", 
    ease: "none",
    duration:3,
    scrollTrigger:{
        trigger:"#slides",scroller:"body",start:"top 20%",bottom:"bottom 90%" ,scrub:1 ,pin:true, scroller: "#main",
    }}
)

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

const btns = document.querySelectorAll(".magnet");
btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        btn.style.transform = "translate(" + x * 0.3 + "px," + y * 0.5 + "px)";
    });
});
btns.forEach((btn) => {
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "translate(0px,0px)";
    });
});


const tl=gsap.timeline();
tl.to("#loader",{
    y:'-1000vh',
    duration:1.5,

});

tl.from("#nav ",{
    y:-50,opacity:0
});
tl.from(".Welcome h1",{
    y:-100,opacity:0
});
tl.from(".headings h1",{
    x:100,
    opacity:0
});
tl.from(".kittens ",{
    y:50,opacity:0,
});



