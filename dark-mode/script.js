const dmButton = document.getElementById("darkModeButton");

dmButton.addEventListener("click", () => {
  dmButton.classList.toggle("dark");
  document.body.classList.toggle("dark");
});
