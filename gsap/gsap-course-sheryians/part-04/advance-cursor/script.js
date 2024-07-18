const main = document.querySelector("main");
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const imgContainer = document.querySelector(".image__container");

main.addEventListener("click", () => {});

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x - 15,
    y: e.y - 15,
    duration: 0.2,
  });
});

imgContainer.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 1.5,
    duration: 0.4,
  });
});

imgContainer.addEventListener("mouseleave", (e) => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.4,
  });
});
