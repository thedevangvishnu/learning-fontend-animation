gsap.to(".page2 .title", {
  transform: "translateX(-65%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    scrub: 2,
    pin: true,
    start: "top 0%",
    end: "top -150%",
  },
});

/**
 *
 * scrollTrigger specific properties:
 *
 * trigger: "Element identifier (tagName, class, id)",
 * scroller: "body",
 * markers: true,
 * start: "Start position
 * scrub: boolean or numeric value (1 to 5)
 * oin
 */
