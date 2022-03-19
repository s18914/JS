let red = 100;
let green = 100;
let blue = 100;
let color = 100;

document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - arrow up
  // 40 - arrow down
  switch(e.keyCode) {
    case 38:
      color <= 255 ? color+=2 : color;
      document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
      break;
    case 40:
      color >= 0 ? color-=2 : color;
      document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
      break;
  }

}

window.addEventListener('keydown', changeColor)