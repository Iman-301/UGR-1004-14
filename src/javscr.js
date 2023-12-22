const header = document.querySelector("header");
const nav = document.querySelector("nav");

header.addEventListener("mouseenter", () => {
  nav.classList.remove("hidden");
});

header.addEventListener("mouseleave", () => {
  nav.classList.add("hidden");
});
