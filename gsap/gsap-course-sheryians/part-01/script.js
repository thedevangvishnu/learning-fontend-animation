const tl = gsap.timeline();

tl.from(".nav__logo h2", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  delay: 1,
});

tl.from(".menu__item", {
  y: 10,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});

tl.from(".hero__title", {
  x: -20,
  opacity: 0,
  color: "rgb(189, 179, 184)",
  duration: 0.5,
});

tl.from(".hero__subtitle", {
  x: 20,
  opacity: 0,
  duration: 0.5,
});

/**
 * gsap.to()
 *
 * gsap.from()
 *
 * gsap.timeline()
 *
 *
 *
 * Important properties:
 *
 * stagger: 1
 *  - applies the animation to first element and then delays 1 sec (or given value) for other element
 *  - value in seconds
 *  - -1 one means it will first apply to last element
 * repeat: 2 (numeric integer value)
 *  - positive value (n) repeats the element animation for n times more.
 *  - negative value (-n) repeats the animation infinitely
 * yoyo: true
 *  - makes the animation bidirectional
 *
 *
 *
 */
