const main = document.querySelector("main");
const cursor = document.querySelector(".cursor");

main.addEventListener("click", () => {});

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x - 20,
    y: e.y - 20,
    duration: 0.2,
  });
});
