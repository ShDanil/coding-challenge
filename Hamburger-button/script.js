const button = document.getElementById("hamButton");
const nav = document.getElementById("navId");
const clickHereText = document.getElementById("clickHereDiv");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
  button.classList.toggle("active");
  clickHereText.classList.toggle("active");
});
