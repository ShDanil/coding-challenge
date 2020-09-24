const openModal = document.getElementById("modalButtonOpen");
const closeModal = document.getElementById("modalButtonClose");
const container = document.getElementById("modalDivContainer");

openModal.addEventListener("click", () => {
  container.classList.add("active");
});
closeModal.addEventListener("click", () => {
  container.classList.remove("active");
});
