// 스와이퍼
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
// });
if (window.innerWidth < 768) {
    let brandImg = document.querySelectorAll(
        ".main-0918-brand-secton .main-0918-brand .main-0918-brand-img"
    );
    brandImg.forEach((img, i) => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                markers: false,
                start: "50% bottom",
                end: "170% start",
                scrub: true,
            },
            y: "100%",
        });
    });
} else {
    // let brandImg = document.querySelectorAll(
    //     ".main-0918-brand-secton .main-0918-brand .main-0918-brand-img"
    // );
    // brandImg.forEach((img, i) => {
    //     gsap.to(img, {
    //         scrollTrigger: {
    //             trigger: img,
    //             markers: false,
    //             start: "50% bottom",
    //             end: "300% start",
    //             scrub: true,
    //         },
    //         y: "100%",
    //     });
    // });


    // gsap.to(".hangyeol-swiper-section1", {
    //     scrollTrigger: {
    //         trigger: ".hangyeol-swiper-section1",
    //         markers: false,
    //         start: "1% center",
    //         end: "100% center",
    //         scrub: true,
    //     },
    //     top: "-200px",
    // });
}




let brandImg = document.querySelectorAll(
    ".swiper-img"
);
brandImg.forEach((img, i) => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            markers: false,
            start: "50% center",
            end: "300% start",
            scrub: true,
        },
        y: "10%",
    });
});