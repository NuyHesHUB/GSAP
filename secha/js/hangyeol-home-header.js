// hangyeol-home-header 시작
gsap.timeline()
    .to(".hangyeol-home-header-container", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.in(0.5)"
    })
    .to(".hangyeol-home-header-container", {
        width: "100%",
        duration: 0.7,
        ease: "back.in(0.2)"
    })
    .add([
        gsap.to(".hangyeol-home-header .home-header.center", {
            y: 0,
            opacity: 1,
            duration: 0.5,
        }),
    ])
    .to(".hangyeol-home-header .home-header", {
        y: 0,
        opacity: 1,
        duration: 0.5,
    });

const hamMenu = document.querySelector(".mobile-ham-menu");
const headerXBtn = document.querySelector(".mobile-x-icon");
const headerMobileSub = document.querySelector(".hangyeol-mobile-sebu-wrap");
hamMenu.addEventListener("click",()=>{
    headerMobileSub.style.top = "0vh";
})
headerXBtn.addEventListener("click",()=>{
    headerMobileSub.style.top = "-100vh";
})

const goToContact = document.querySelector(".hangyeol-go-to-contact");
goToContact.addEventListener("click",()=>{
    headerMobileSub.style.top = "-100vh";
})

// hangyeol-home-header 끝