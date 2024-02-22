//text 칠해주는 해주는 함수입니다.
function animateTextContent(selector, timeline) {
    const element = document.querySelector(selector);
    if (!element) return; // 요소가 없다면 종료

    const textContent = element.textContent;
    element.textContent = ""; // 텍스트 내용 지우기

    textContent.split("").forEach((char, index) => {
        if (char === "^") {
            const br = document.createElement("br");
            element.appendChild(br);
        } else {
            const span = document.createElement("span");
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.classList.add("react-item");
            span.style.opacity = 1;
            span.style.display = "inline-block";
            span.style.transition = "1s all";
            element.appendChild(span);

            timeline.fromTo(span, { opacity: 0.1, color: "#888" }, { opacity: 1, color: "#000", duration: 10, delay: index * 0.1 });
        }
    });
}


// riact-step-section 시작
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".riact-step-section",
        start: "3% 80%",
        end: "10% 80%",
        scrub: 1,
        markers: false,
    }
});
animateTextContent(".riat-step-title", tl4)


// const riatStepContentsLeft = document.querySelectorAll(".riat-step-contents-left")
// const riatStebContentsRightImg = document.querySelectorAll(".riat-steb-contents-right-img")
// riatStepContentsLeft.forEach((left, i) => {
//     left.addEventListener("click", () => {
//         riatStepContentsLeft.forEach((btn, i) => {
//             btn.classList.remove("active");
//             riatStebContentsRightImg[i].classList.remove("active")
//
//         })
//         left.classList.add("active")
//         riatStebContentsRightImg[i].classList.add("active")
//     })
// })




const items = document.querySelectorAll('.riat-step-contents-left');
const images = document.querySelectorAll('.riat-steb-contents-right-img');
let activeImage = null;

items.forEach((item, index) => {

    item.addEventListener('mouseover', () => {
        if (activeImage) {

            activeImage.classList.remove('active');

            images[index].classList.add('active');
            activeImage = images[index];


        }
        else {

            images[index].classList.add('active');
            activeImage = images[index];

        }
    });
    console.log(item);
    console.log(index);
});

// riact-step-section 끝