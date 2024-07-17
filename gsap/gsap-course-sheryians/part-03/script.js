let initialPath = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector(".string");

string.addEventListener("mousemove", (event) => {
  const rect = string.getBoundingClientRect();
  console.log(rect);
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  initialPath = `M 10 100 Q ${x} ${y} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: initialPath,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

/**
 *
 * bezier curve -> 4 points
 * quadratic curve -> 3 points
 */
