const images = ["0.jpg", "1.jpg", "2.jpg"];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const todaysImg = images[getRandom(0, 3)];
const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImg}`;
bgImage.classList.add("bg-image");

document.body.appendChild(bgImage);
