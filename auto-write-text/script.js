const text = "New text is comming";
let index = 0;

function createText() {
  document.body.innerText = text.slice(0, index);
  index += 1;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(() => {
  createText();
}, 200);
