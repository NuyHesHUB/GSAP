// hangyeol-swiper-section 시작

if (window.innerWidth < 768) {
    var swiper = new Swiper(".hangyeol-swiper", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        freeMode: true,
    });
} else {
    var swiper = new Swiper(".hangyeol-swiper", {
        slidesPerView: 5,
        spaceBetween: 16,
        freeMode: true,
    });
}
// hangyeol-swiper-section 끝
