function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createBox() {
  const box = document.createElement('div');
  const size = getRandomNumber(1, 150); 
  const color = getRandomColor(); 
  box.classList.add('box');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.left = `${getRandomNumber(0, window.innerWidth - size)}px`;
  box.style.top = `${getRandomNumber(0, window.innerHeight - size)}px`;
  box.style.borderColor = color; 
  document.getElementById('container').appendChild(box);
}

for (let i = 0; i < 600; i++) {
  createBox();
}
