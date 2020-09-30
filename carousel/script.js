const imgs = document.getElementById("imgs");

const allImages = document.querySelectorAll("#imgs img");

let startIndex = 0;

function nextImage() {
  startIndex += 1;

  if (startIndex > allImages.length - 1) {
    startIndex = 0;
  }
  imgs.style.transform = `translateX(${-startIndex * 500}px)`;
}

setInterval(() => {
  nextImage();
}, 2000);
