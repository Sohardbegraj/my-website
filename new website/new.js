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
const closebtndrpmenu = () => {
    const b = document.querySelector(".dropmenubox").classList;
    b.remove("active-popup");
};
const menu = () => {
    const a = document.querySelector(".dropmenubox").classList;
    a.toggle("active-popup");
};
const crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr.style.display = "block";


    function mouseStopped() {
        crsr.style.display = "none";
    }

    timeout = setTimeout(mouseStopped, 1000);
    clearTimeout(timeout);
});
document.addEventListener("mouseout", () => {
    crsr.style.display = "none";
});
const tl=gsap.timeline();

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
    y:50,repeat:10,opacity:0,yoyo:true
});

gsap.to(" #fleft",{
    
    scrollTrigger:{
        trigger:"#fleft",start:"top top%",bottom:"bottom bottom%" ,pin:true,endTrigger:" .elem1",scrub:1 ,
    },
    y:"-100%",
    ease:Power1,
    }
)     
gsap.to("#slides",{
    transform:"translateX(-50%)",
    ease:Power1,
    scrollTrigger:{
        trigger:"#slides",scroller:"body",start:"top 30%",bottom:"top 70%%" ,scrub:1 ,pin:true,
    }}
)
