
    //** chit-main-swiper-section 시작
    // const chitMainPagi = document.querySelector('.chit-main-pagi')
    // const chitMainSwiperVid = document.querySelectorAll('.chit-main-swiper-img')


    const chitMainSwiper = new Swiper('.chit-main-swiper', {
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        },
        effect: 'fade',
        speed: 1000,
        navigation: {
            nextEl: '.chit-main-swiper-next',
            prevEl: '.chit-main-swiper-prev'
        },
        on: {
            // slideChangeTransitionStart: function() {
            //   const activeSlide = this.slides[this.activeIndex];
            //   const letters = activeSlide.querySelectorAll('.letter');
            //   let transitionCompletedCount = 0; // 애니메이션 완료 횟수를 추적
          
            //   // 글자에 대한 애니메이션 설정
            //   letters.forEach((letter, index) => {
            //     letter.style.opacity = '0';
            //     letter.style.transform = 'translateX(-50px)';
            //     letter.style.transition = '';
            //   });
          
            //   // 글자 애니메이션 시작
            //   setTimeout(() => {
            //     letters.forEach((letter, index) => {
            //       // transition 속성을 다시 적용합니다.
            //       letter.style.transition = `opacity 0.9s ease-out ${index * 0.1}s, transform 0.9s ease-out ${index * 0.1}s`;
            //       letter.style.opacity = '1';
            //       letter.style.transform = 'translateX(0px)';
          
            //       // 각 글자의 transitionend 이벤트 리스너를 추가합니다.
            //       letter.addEventListener('transitionend', function(e) {
            //         // 특정 속성에 대한 transitionend 이벤트인지 확인합니다.
            //         if (e.propertyName === 'transform') {
            //           transitionCompletedCount++;
          
            //           // 마지막 글자의 transform 속성에 대한 애니메이션이 끝났는지 확인합니다.
            //           if (transitionCompletedCount === letters.length) {
            //             // 모든 글자의 애니메이션이 끝나면 transition 스타일을 초기화합니다.
            //             letters.forEach(ltr => ltr.style.transition = '');
            //           }
            //         }
            //       });
            //     });
            //   }, 100);
            // }
          }
          
    });



    // chit-main-swiper-section
    gsap.to('.chit-main-swiper-section',{
        scrollTrigger: {
            trigger: ".chit-main-swiper-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
        },
        y:'100%',
        ease: "linear"
    })
    

//** chit-main-swiper-section 끝



// hospital-bigtext-section 시작

// let bigText = document.querySelector('.hospital-bigtext-text')
// let bigTextWrap = document.querySelector('.hospital-bigtext-textwrap')
// gsap.to('.hospital-bigtext-text',{
//     scrollTrigger: {
//         trigger: ".hospital-bigtext-section",
//         start: "top 70%",
//         // end: "bottom top",
//         // duration:5,
//         markers: false,
//         onEnter:()=>{
//             let lines = document.querySelectorAll('.line');
//             let delay = 0.5;
          
//             lines.forEach(function(line, index) {
//               line.style.animationDelay = `${delay}s`; // 각 줄에 대해 0.5초 간격으로 지연시간을 설정합니다.
//               delay += 0.5;
//             });

//             // bigTextWrap.classList.add('active')
//             bigText.classList.add('active')
//         },
//         // onLeave:()=>{
//         //     bigText.classList.remove('active')
//         // },
//         // onEnterBack:()=>{
//         //     bigText.classList.add('active')
//         // }
//     },
// })


// hospital-bigtext-section 끝



// hospital-swipercont-section 시작

const HospicalMainSwiper = new Swiper('.hospital-swipercont-swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    effect: 'fade',
    speed: 1000,
});



let swiperContLists = document.querySelectorAll('.hospital-swipercont-list');


// swiperContLists.forEach(list => {
//     list.addEventListener('click', function() {

//         let swiperConttext = this.closest('.hospital-swipercont-list').querySelector('.hospital-swipercont-listtext');
//         if (list) {
//             list.classList.toggle('active');
//         }
//         if (swiperConttext) {
//             console.log(swiperConttext)        
//             swiperConttext.classList.toggle('active');
//         }
//         // if (faqIcon) {
//         //     if(faqIcon.innerText === 'arrow_upward'){
//         //         faqIcon.innerText = ''
//         //         faqIcon.innerText = 'arrow_downward'
//         //     } else if(faqIcon.innerText === 'arrow_downward'){
//         //         faqIcon.innerText = ''
//         //         faqIcon.innerText = 'arrow_upward'
//         //     }
//         // }
//     });
// })
swiperContLists.forEach(list => {
    list.addEventListener('click', function() {
        // 이미 활성화된 요소인지 확인
        const isActive = this.classList.contains('active');

        // 모든 리스트에서 'active' 클래스 제거
        swiperContLists.forEach(el => {
            el.classList.remove('active');
            let text = el.querySelector('.hospital-swipercont-listtext');
            if (text) {
                text.classList.remove('active');
            }
        });

        // 클릭된 요소가 이미 활성화되지 않았다면 'active' 클래스 추가
        if (!isActive) {
            this.classList.add('active');
            let swiperConttext = this.querySelector('.hospital-swipercont-listtext');
            if (swiperConttext) {
                swiperConttext.classList.add('active');
            }
        }
    });
});

// hospital-swipercont-section 끝





// riact-step-section 시작

// const riactStepVid = document.querySelectorAll('.riat-steb-contents-right-img')

// gsap.to(".riact-step-section", {
//     scrollTrigger: {
//         trigger: ".riact-step-section",
//         markers: false,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         duration: 5,
//         onEnter: ()=>{
//             for(let i = 0; i < riactStepVid.length; i++){
//                 riactStepVid[i].play()
//             }
//         },
//         onEnterBack: ()=>{
//             for(let i = 0; i < riactStepVid.length; i++){
//                 riactStepVid[i].play()
//             }
//         },
//         onLeave: ()=>{
//             for(let i = 0; i < riactStepVid.length; i++){
//                 riactStepVid[i].pause()
//             }
//         },
//         onLeaveBack: ()=>{
//             for(let i = 0; i < riactStepVid.length; i++){
//                 riactStepVid[i].pause()
//             }
//         }
//     }
// });

// const tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".riact-step-section",
//         start: "3% 80%",
//         end: "10% 80%",
//         scrub: 1,
//         markers: false,
//     }
// });
// animateTextContent(".riat-step-title", tl4)


const riatStepContentsLeft = document.querySelectorAll(".riat-step-contents-left")
const riatStebContentsRightImg = document.querySelectorAll(".riat-steb-contents-right-img")
riatStepContentsLeft.forEach((left, i) => {
    left.addEventListener("click", () => {
        riatStepContentsLeft.forEach((btn, i) => {
            btn.classList.remove("active");
            riatStebContentsRightImg[i].classList.remove("active")

        })
        left.classList.add("active")
        riatStebContentsRightImg[i].classList.add("active")
    })
})

// const riatStepContentsLeft = document.querySelectorAll(".riat-step-contents-left");
// const riatStebContentsRightImgVideos = document.querySelectorAll(".riat-steb-contents-right-img video");
//
// const videoUrls = [
//     "assets/images/riact-step-section/11.mp4",
//     "assets/images/riact-step-section/22.mp4",
//     "assets/images/riact-step-section/33.mp4",
//     "assets/images/riact-step-section/22.mp4",
//     "assets/images/riact-step-section/33.mp4"
// ];
//
// // NodeList를 배열로 변환
// const videoArray = Array.from(riatStebContentsRightImgVideos);
//
// riatStepContentsLeft.forEach((left, i) => {
//     left.addEventListener("click", () => {
//         riatStepContentsLeft.forEach(btn => btn.classList.remove("active"));
//
//         // 배열을 사용하여 해당하는 비디오 요소의 src 속성 설정
//         videoArray.forEach((video, index) => {
//             if (index === i) {
//                 video.src = videoUrls[index];
//                 video.load(); // 비디오를 다시 로드하여 변경된 src가 적용되도록 함
//             }
//         });
//
//         left.classList.add("active");
//     });
// });


// riact-step-section 끝



//hospital-youtube-section 시작

// 모든 '.hospital-youtube-listwrap' 요소에 대한 클릭 이벤트 리스너를 추가합니다.
document.querySelectorAll('.hospital-youtube-listwrap').forEach(item => {
    item.addEventListener('click', function() {
      // 클릭된 요소에서 '.hospital-youtube-listvid' 이미지의 src 속성을 찾습니다.
      var imgSrc = item.querySelector('.hospital-youtube-listvid').src;
      
      // 메인 비디오 이미지 요소를 찾아 src 속성을 업데이트합니다.
      var mainVid = document.querySelector('.hospital-youtube-mainvid');
      if (mainVid) {
        mainVid.src = imgSrc;
      }
    });
  });

//hospital-youtube-section 시작

  

//hospital-faq-section 시작
let faqLists = document.querySelectorAll('.hospital-faq-list');


faqLists.forEach(list => {
    list.addEventListener('click', function() {
        let faqtext = this.closest('.hospital-faq-list').querySelector('.hospital-faq-listtext');
        if (list) {
            list.classList.toggle('active');
        }
        if (faqtext) {
            console.log(faqtext)        
            faqtext.classList.toggle('active');
        }
        // if (faqIcon) {
        //     if(faqIcon.innerText === 'arrow_upward'){
        //         faqIcon.innerText = ''
        //         faqIcon.innerText = 'arrow_downward'
        //     } else if(faqIcon.innerText === 'arrow_downward'){
        //         faqIcon.innerText = ''
        //         faqIcon.innerText = 'arrow_upward'
        //     }
        // }
    });
})

//hospital-faq-section 끝



// hospital-ai-section 시작 

let sessionID;

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('https://port-0-haneum-gpt-py-k19y2kljr1tmyi.sel4.cloudtype.app/chat/start', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    sessionID = data.conversation_id;

    console.log(sessionID);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

const hospitalAiBtn = document.querySelectorAll(".hospital-ai-btn");
const hospitalAiListWrap = document.querySelectorAll(
  ".hospital-ai-ques-list-wrap"
);
const hospitalAiQues = document.querySelectorAll(".hospital-ai-ques");
const hospitalAiReady = document.querySelector(".hospital-ai-ready");
const hospitalAnswer = document.querySelector(".hospital-ai-answer");
const hospitalForm = document.querySelector("#hospital-ai-form");
let hospitalIsTrans = false;
let hospitalIsView = 0;
let hospitalIsAnswer = false;

let hospitalQuesList = [
  "짜증과 화가 잘나고, 기분변화가 심해요.",
  "긴장 불안 걱정 / 가슴 답답 두근 숨쉬기 곤란",
  "외출, 대인관계가 힘들어요.",
  "집중력 기억력이 떨어져요.",
  "이상한 말이나 행동이 나와요.",
  "한방에서 신경정신과 치료를요?",
  "한방신경정신과 전문의가 뭐에요?",
  "어떤 분들이 많이 오시나요.?",
  "효과는 있나요? 재발은요?",
  "한약에 대한 부정적인 말은 뭐에요?",
  "양약이나 상담 치료 중인데, 동시에 가능해요?",
  "진료 순서가 궁금해요.",
  "내성이나 중독 걱정 없나요?",
  "혼자 이겨내고 싶어요.",
  "여기 저기 아픈 곳도 치료 되나요?"
];

for (let i = 0; i < hospitalAiBtn.length; i++) {
  hospitalAiBtn[i].addEventListener("click", (e) => {
    e.preventDefault();

    if (!hospitalIsTrans) {
      hospitalIsTrans = true;
      hospitalAiListWrap[i].classList.remove("active");

      $(".hospital-ai-ques-list-wrap")
        .eq(hospitalIsView)
        .fadeOut(300, function () {
          hospitalIsView = i;
          $(".hospital-ai-ques-list-wrap")
            .eq(hospitalIsView)
            .fadeIn(300, function () {
              hospitalAiListWrap[i].classList.add("active");
              hospitalIsTrans = false;
            });
        });
    }
  });
}

for (let i = 0; i < hospitalAiQues.length; i++) {
  hospitalAiQues[i].addEventListener("click", (e) => {
    e.preventDefault();
    hospitalAiReady.classList.add("active");

    let hospitalQues = hospitalQuesList[i];

    console.log(hospitalQues)

    if (!hospitalIsAnswer) {
      hospitalIsAnswer = true;
      hospitalAnswer.innerHTML = '';

      fetch(`https://port-0-haneum-gpt-py-k19y2kljr1tmyi.sel4.cloudtype.app/chat/${sessionID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_message: hospitalQues,
        }),
      })
        .then((response) => {
          hospitalAiReady.classList.remove("active");

          const reader = response.body.getReader();
          reader.read().then(function processText({ done, value }) {
            if (done) {
              console.log("Stream complete");
              return;
            }
            const chunk = new TextDecoder().decode(value);
            hospitalAnswer.innerHTML += chunk;
            reader.read().then(processText);
          });

          hospitalIsAnswer = false;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}

hospitalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  hospitalAiReady.classList.add("active");
  let hospitalQues = document.getElementById("hospital-ques").value;

  if (!hospitalIsAnswer) {
    hospitalIsAnswer = true;
    hospitalAnswer.innerHTML = '';

    fetch(`https://port-0-haneum-gpt-py-k19y2kljr1tmyi.sel4.cloudtype.app/chat/${sessionID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_message: hospitalQues,
      }),
    })
      .then((response) => {
        hospitalAiReady.classList.remove("active");

        const reader = response.body.getReader();
        reader.read().then(function processText({ done, value }) {
          if (done) {
            console.log("Stream complete");
            return;
          }
          const chunk = new TextDecoder().decode(value);
          hospitalAnswer.innerHTML += chunk;
          reader.read().then(processText);
        });

        hospitalIsAnswer = false;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

const hospitalAiswiper = new Swiper('.hospital-ai-ques-swiper', {
  direction: 'vertical',
  slidesPerView: 7
});


