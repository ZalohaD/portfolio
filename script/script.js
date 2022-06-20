new WOW().init();

var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
$(document).ready(function() {
  anime.timeline({ loop: false }).add({
    targets: ".hero-title .letter",
    translateY: [120, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3200,
    delay: (el, i) => 4500 + 40 * i
  });
});

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3
});    

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.6
  },
  0.1
);

const timeline = gsap.timeline();
    timeline.to(".animate",{
        delay: 3,
        duration: .5,
        opacity: 0
    });
    timeline.to(".animation",{
        delay: 1,
        duration: 1,
        y: "100%",
        ease: "power4.out"
    });
    timeline.to(".animation",{
        zIndex: -1
    });
    timeline.from(".container h1",{
        delay: .5,
        duration: .8,
        skewY: 10,
        y: 100,
        x: -199,
        opacity: 0
    })
    tl.from(".line", {
      duration: 1,
      width: "0%",
      stagger: {
        amount: 2,
      },
    });
  