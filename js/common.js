// gsap timeline
// 주로 같은 요소를 다른 간격으로 애니메이션을 걸떄 초기화 되는경우 사용합니다.
let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "gsap-timeline",
      start: "0 top", // 첫 번째 애니메이션의 start 값
      end: "500px center",
      scrub: true,
      markers: true,
    },
  });
  
  tl1.to(".text1", {
    y: "50%",
  });
  
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "gsap-timeline",
      start: "600px top", // 두 번째 애니메이션의 start 값
      end: "1000px top",
      scrub: true,
      markers: true,
    },
  });
  
  tl2.to(".text1", {
    y: "100%",
  });
  

  //onEnter, onLeave, onENterBack, onLeavBAck 
  gsap.to(".test", {
    scrollTrigger: {
        trigger: ".onElel-timeline",
        start: "top center",
        end: "center center",
        // markers: true,
        scrub: true,
        onEnter: () => {
            console.log("onEnter")
        // start 부분 진입할때 동작합니다.
        },
        onLeave: () => {
        // end 부분 지나칠때 동작합니다.
            console.log("onLeave")
        },
        onEnterBack: () => {
        // scroll 올리면서 end부분 진입할때 동작합니다.
        console.log("onEnterBack")
        },
        onLeaveBack: () => {
        // scroll 올리면서 start 부분 지나칠때 동작합니다.
        console.log("onLeaveBack")
        }
    },
});


//gsap forEach
let boxes = document.querySelectorAll(".box");
// 각박스영역의 start, end부분에 애니메이션이 걸림.
boxes.forEach((box, i) => {
    // console.log(box)
    gsap.to(box, {
        scrollTrigger: {
            trigger: box,
            start: "top center",
            end: "center center",
            markers: false,
            scrub: true,
        },
        backgroundColor: "grey",    
    });
})