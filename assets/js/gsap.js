gsap.registerPlugin(ScrollTrigger);

//Main Title
gsap.from(".sc-first .title", {
  opacity: 0.1,
  duration: 1.5,
  y: 40,
});
gsap.from(".sc-first .txt-box", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
});

//메인타이틀 근처 이미지들에 dataset 작업해 두기

//Design Studio
gsap.from(".sub-title span", {
  opacity: 0.5,
  duration: 0.5,
  x: -50,
});

//What we do, Service List
// gsap.utils.toArray('.section').forEach(element => {//동일한 클래스를 각각의 배열로 만들엇슴
gsap.from(".sc-service .service-list .item", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  y: 50,
  scrollTrigger: {
    trigger: ".sc-service",
    start: "0% 100%",
    end: "100% 0%",
  }
});


//Brand box
const brandBoxes = document.querySelectorAll(".brand-box");

brandBoxes.forEach((box) => {
  gsap.set(box, { x: "50%" });
  gsap.to(".brand-box", {
    scrollTrigger: {
      trigger: ".brand-area",
      start: "0% 100%",
      end: "50% 0%",
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.5,
  });
});

//WORK 배경색 바꾸기


//Awards 
gsap.from(".awards-area .slide", {
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  y: 50,
  scrollTrigger: {
    trigger: ".awards-area",
    start: "0% 50%",
    end: "100% 0%",
    markers: false,
  }
});
// gsap.from(".awards-area .badge.wrap", {
//   opacity: 0,
//   duration: 0.5,
//   y: 30,
//   scrollTrigger: {
//     trigger: ".awards-area",
//     start: "0% 50%",
//     end: "100% 0%",
//     markers: true,
//   }
// });

gsap.from(".deco-txt", {
  scrollTrigger: {
    trigger: ".deco-txt",
    start: "60% 100%",
    end: "100% 0%",
  },
  opacity: 0.5,
  duration: 1,
  y: 80,
});



//Footer 배경색
// gb