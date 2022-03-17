
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY); 
  // h1.textContent = `${e.screenX}, ${e.screenY}`; //początek ekranu
  // h1.textContent = `${e.pageX}, ${e.pageY}`; // początek strony

  const x = e.clientX + 1;
  const y = e.clientY + 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  h1.textContent = x + ", " + y;

  const red = x/width * 100;
  const green = ((x/width * 100) + (y/height * 100)) /2;
  const blue = y/height * 100;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})