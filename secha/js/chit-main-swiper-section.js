//** chit-main-swiper-section 시작
const chitMainPagi = document.querySelector('.chit-main-pagi')
const chitMainSwiperVid = document.querySelectorAll('.chit-main-swiper-img')


const chitMainSwiper = new Swiper('.chit-main-swiper', {
    // loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // },
    effect: 'fade',
    speed: 1000,
    navigation: {
        nextEl: '.chit-main-swiper-next',
        prevEl: '.chit-main-swiper-prev'
    },
    // on: {
    //     slideChange: function () {
    //         chitMainPagi.innerText = `${this.realIndex + 1}`
    //         for(let i = 0; i < chitMainSwiperVid.length; i++){
    //             chitMainSwiperVid[i].pause()
    //         }
    //         chitMainSwiperVid[this.realIndex].play()
    //     }
    // }
});
//** chit-main-swiper-section 끝
