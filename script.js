let mainDiv = document.querySelector("#main");
let theme = document.querySelector("#main audio");
theme.loop = true;
let flag = 0;
mainDiv.addEventListener("click", function() {
  if (flag === 0) {
    theme.play();
    flag = 1;
  }
  else {
    theme.pause();
    flag = 0;
  }
});
/*--Code To Play & PauseThe Theme On Tap ⬆️⬆️⬆️--*/

document.querySelector('.scroll-btn').addEventListener('click', function() {
  let nextSection = document.querySelector(".page2");
  nextSection.scrollIntoView({ behavior: 'smooth' });
}); /*--Code To Scroll Down When Click Hero-btn--*/

function heroAnimation(){
  let tl = gsap.timeline();
tl.from(".navbar span", {
  opacity: 0,
  y: -25,
  duration: 0.5,
  stagger: 0.35,
});

tl.from(".heroTitle h3", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.25,
});

tl.from(".heroAgeText", {
  x: 50,
  opacity: 0,
  duration: 0.3,
});

tl.from(".heroAge h1:nth-child(1)", {
  y: -30,
  opacity: 0,
  duration: 0.35,
});
tl.from(".heroAge h1:nth-child(2)", {
  y: 30,
  opacity: 0,
  duration: 0.35,
});

tl.from(".heroDate", {
  x: -50,
  opacity: 0,
  duration: 0.4,
});

tl.from(".heroLastText p", {
  y: 20,
  opacity: 0,
  duration: 0.35,
  stagger: 0.25,
});

tl.from(".scroll-btn", {
  opacity: 0,
  scale: 1.1,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
});
};
heroAnimation(); /*Function For Hero Animation*/

function page2Animation(){
  gsap.from(".page2HeadLeft section", {
  opacity: 0,
  x: -50,
  scrollTrigger:{
    trigger: ".page2HeadLeft section",
    scroller: "body",
    start: 'top 90%',
    end: 'top 50%',
    scrub: 2,
  }
});

gsap.from(".page2HeadRight>p", {
  opacity: 0,
  scrollTrigger:{
    trigger: ".page2HeadRight>p",
    scroller: "body",
    start: 'top 65%',
    end: 'top 45%',
    scrub: 1,
  }
});

gsap.from(".page2HeadRight>span", {
  opacity: 0,
  scrollTrigger:{
    trigger: ".page2HeadRight>span",
    scroller: "body",
    start: 'top 40%',
    end: 'top 30%',
    scrub: 2,
  }
});

document.querySelector(".page2HeadLeft>section").addEventListener("mouseenter", function(){
  gsap.to(".page2HeadLeft>section", {
    scale: 1.05,
    duration: 0.5,
    stagger: 0.3,
  })
});
document.querySelector(".page2HeadLeft>section").addEventListener("mouseleave", function(){
  gsap.to(".page2HeadLeft>section", {
    scale: 1,
    duration: 0.5,
  })
});

gsap.from(".page2MsgText", {
   opacity: 0,
  scrollTrigger: {
    trigger: ".page2MsgText",
    scroller: "body",
    start: 'top 70%',
    end: 'top 50%',
    scrub: 1,
}});

gsap.from(".page2MsgImage", {
  opacity: 0,
  x: 50,
  scrollTrigger:{
    trigger: ".page2MsgImage",
    scroller: "body",
    start: 'top 90%',
    end: 'top 55%',
    scrub: 1,
  }
});

document.querySelector(".page2MsgImage").addEventListener("mouseenter", function() {
  gsap.to(".page2MsgImage", {
    scale: 1.05,
    duration: 0.5,
    stagger: 0.3,
  })
});
document.querySelector(".page2MsgImage").addEventListener("mouseleave", function() {
  gsap.to(".page2MsgImage", {
    scale: 1,
    duration: 0.5,
  })
});

gsap.from(".page2Msg>span", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2Msg>span",
    scroller: "body",
    start: 'top 80%',
    end: 'top 50%',
    scrub: 2,
  }
})};
page2Animation(); /*Function For Page2 Animation*/

function page3Animation(){
  gsap.from(".page3Head h1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3Head h1",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  }
});

gsap.from(".page3Head>section>div:nth-child(1)", {
  opacity: 0,
  x: -20,
  scrollTrigger: {
    trigger: ".page3Head section",
    scroller: "body",
    start: "true 70%",
    end: "top 40%",
    scrub: 1,
  }
});
gsap.from(".page3Head>section>div:nth-child(2)", {
  opacity: 0,
  x: 20,
  scrollTrigger: {
    trigger: ".page3Head section",
    scroller: "body",
    start: "true 70%",
    end: "top 40%",
    scrub: 1,
  }
});

gsap.from(".page3Head>small", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".page3Head>small",
    scroller: "body",
    start: "true 80%",
    end: "top 60%",
    scrub: 1,
  }
});

gsap.to(".page3 .slider h1", {
  transform: 'translateX(-100%)',
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: 'top 0%',
    end: 'top -130%',
    scrub: 3,
    pin: true,
  }
}); /*Code For The Scroll Slider*/

gsap.from(".page3-footer", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3-footer",
    scroller: "body",
    start: "true 80%",
    end: "top 0%",
    scrub: 3,
  }
});

gsap.from(".page3>span:nth-child(1)", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3>span",
    scroller: "body",
    start: 'top 55%',
    end: 'top 30%',
    scrub: 2,
  }
});

gsap.from(".page3>span:nth-child(2)", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3>span:nth-child(2)",
    scroller: "body",
    start: "true 45%",
    end: "top 0%",
    scrub: 3,
  }
});

};
page3Animation(); /*Function For Page3 Animation*/

function page4Animation(){
  gsap.from(".page4>span",{
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4>span",
    scroller: "body",
    start: 'top 55%',
    end: 'top 30%',
    scrub: 2,
}});

gsap.from(".page4-con>h1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-con>h1",
    scroller: "body",
    start: 'top 65%',
    end: 'top 50%',
    scrub: 1,
  }
});

gsap.from(".page4-con .page4-img", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-con .page4-img",
    scroller: "body",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page4-con small", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-con small",
    scroller: "body",
    start: 'top 70%',
    end: 'top 50%',
    scrub: 2,
  }
});

gsap.from(".page4-footer h1:nth-child(1)", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    trigger: ".page4-footer h1",
    scroller: "body",
    start: 'top 65%',
    end: 'top 50%',
    scrub: 1,
  }
});
gsap.from(".page4-footer h1:nth-child(3)", {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    trigger: ".page4-footer h1",
    scroller: "body",
    start: 'top 65%',
    end: 'top 50%',
    scrub: 1,
  }
});
gsap.from(".page4-footer>span", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-footer>span",
    scroller: "body",
    start: 'top 60%',
    end: 'top 50%',
    scrub: 1,
  }
});
};
page4Animation(); /*Function For Page4 Animation*/

function page5Animation() {
  gsap.from(".page5-head span", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-head span',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page5-head h1", {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-head h1',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page5-con-left>section", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-con-left>section',
    start: 'top 65%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page5-con-left>small", {
  opacity: 0,
  x: 30,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-con-left>small',
    start: 'top 65%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page5-con-right>small", {
  opacity: 0,
  x: -30,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-con-right>small',
    start: 'top 65%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".page5-con-right>section", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page5-con-right>section',
    start: 'top 65%',
    end: 'top 55%',
    scrub: 1,
  }
});
};
page5Animation(); /*Function For Page5 Animation*/

function maybeAnimation() {
  gsap.from(".maybe-title small", {
  opacity: 0,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-title small',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});
gsap.from(".maybe-title h1", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-title h1',
    start: 'top 75%',
    end: 'top 55%',
    scrub: 1,
    scrub: 2,
  }
});

gsap.from(".maybe-con>div:nth-child(1)", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-con>div:nth-child(1)',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
  }
});
gsap.from(".maybe-con>div:nth-child(2)", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-con>div:nth-child(2)',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
  }
});
gsap.from(".maybe-con>div:nth-child(3)", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-con>div:nth-child(3)',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
  }
});
gsap.from(".maybe-con>div:nth-child(4)", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.maybe-con>div:nth-child(4)',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
  }
});
};
maybeAnimation(); /*Function For Maybe Animation*/

function sorryAnimation() {
  gsap.from(".sorry-title>h1, .sorry-title>small", {
  opacity: 0,
  scale: 1.05,
  stagger: 0.5,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.sorry-title>h1, .sorry-title>small',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".sorry-title section", {
  opacity: 0,
  y: 30,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.sorry-title section',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".sorry-msg>div", {
  opacity: 0,
  y: 35,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.sorry-msg>div',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});
gsap.from(".sorry-msg>section", {
  opacity: 0,
  y: 35,
  stagger: 1,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.sorry-msg>section',
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});
};
sorryAnimation(); /*Function For Sorry Animation*/

function lastAnimation() {
  gsap.from(".last-title-con>h1", {
  opacity: 0,
  y: 50,
  scrollTrigger:{
    scroller: "body",
    trigger: ".last-title-con>h1",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".last-title", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-title",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});


gsap.from(".last-pt1>p", {
  opacity: 0,
  y: 40,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt1>p",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
    ease: 'power1.in',
  }
}); /*--last-pt1--*/


gsap.from(".last-pt2-img", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt2-img",
    start: 'top 70%',
    end: 'top 60%',
    scrub: 1,
  }
});

gsap.from(".last-pt2>p", {
  opacity: 0,
  y: 40,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt2>p",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
    ease: 'power1.in',
  }
}); /*--Last-pt2--*/


gsap.from(".last-pt3>div section:nth-child(1)", {
  opacity: 0,
  x: -50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt3>div section:nth-child(1)",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".last-pt3>div section:nth-child(2)", {
  opacity: 0,
  x: 50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt3>div section:nth-child(2)",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".last-pt3>p", {
  opacity: 0,
  y: 40,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt3>p",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
    ease: 'power1.in',
  }
});

gsap.from(".last-pt3-last-img", {
  opacity: 0,
  x: 50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt3-last-img",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
}); /*--Last-pt4--*/


gsap.from(".last-pt4>p", {
  opacity: 0,
  y: 40,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt4>p",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
    ease: 'power1.in',
  }
});

gsap.from(".last-pt4>div section:nth-child(1)", {
  opacity: 0,
  x: -50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt4>div section:nth-child(1)",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});
gsap.from(".last-pt4>div section:nth-child(2)", {
  opacity: 0,
  x: 50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt4>div section:nth-child(2)",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 1,
  }
});

gsap.from(".last-pt4-footer h1:nth-child(1)", {
  opacity: 0,
  x: -50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt4-footer h1:nth-child(1)",
    start: 'top 70%',
    end: 'top 55%',
    scrub: 2,
  }
});
gsap.from(".last-pt4-footer h1:nth-child(2)", {
  opacity: 0,
  x: 50,
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-pt4-footer h1:nth-child(2)",
    start: 'top 70%',
    end: 'top 65%',
    scrub: 2,
  }
}); /*--Last-pt4--*/


gsap.from(".last-wish div:nth-child(2)", {
  opacity: 0,
  transform: 'translate(-50%, -50%) rotate(0deg)',
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-wish div:nth-child(2)",
    start: 'top 70%',
    end: 'top 70%',
    scrub: 1,
  }
});
gsap.from(".last-wish div:nth-child(1)", {
  opacity: 0,
  transform: 'translate(-50%, -50%) rotate(0deg)',
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-wish div:nth-child(1)",
    start: 'top 70%',
    end: 'top 70%',
    scrub: 1,
  }
});

gsap.from(".last-wish h1", {
  opacity: 0,
  transform: 'translate(-50%, -50%) rotate(0deg)',
  stagger: 0.35,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-wish h1",
    start: 'top 70%',
    end: 'top 70%',
    scrub: 1,
  }
});

gsap.from(".last-wish #lastLine1, #lastLine2", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".last-wish #lastLine1, #lastLine2",
    start: 'top 70%',
    end: 'top 70%',
    scrub: 1,
  }
}); /*--Last-wish ended--*/

};
lastAnimation(); /*Function For Last Animation*/