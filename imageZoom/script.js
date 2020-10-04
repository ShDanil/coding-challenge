let imageContainer = document.getElementById("container");
let img = document.getElementById("imgId");

imageContainer.addEventListener("mousemove", (e) => {
  clientX = e.clientX - imageContainer.offsetLeft;
  clientY = e.clientY - imageContainer.offsetTop;
  mWidth = imageContainer.offsetWidth;
  mHeight = imageContainer.offsetHeight;

  clientX = (clientX / mWidth) * 100;
  clientY = (clientY / mWidth) * 100;

  img.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`;
});
imageContainer.addEventListener("mouseleave", () => {
  img.style.transform = "translate(-50%, -50%) scale(1)";
});
