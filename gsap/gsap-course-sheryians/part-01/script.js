const tl = gsap.timeline();

tl.from(".nav__logo h2", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
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
