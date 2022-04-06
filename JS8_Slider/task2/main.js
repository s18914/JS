const slideList = [{
 img: "images/img1.jpg",
 text: 'Pierwszy tekst'
},
{
 img: "images/img2.jpg",
 text: 'Drugi tekst'
},
{
 img: "images/img3.jpg",
 text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]


const time = 3000;
let active = 0;


const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}

let change = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    switch(e.keyCode) {
        case 37:
            clearInterval(change);
            for(let i =0; i<slideList.length-1; i++){
                changeSlide();
            }
            change = setInterval(changeSlide, time)
            break;
        case 39:
            clearInterval(change);
            changeSlide();
            change = setInterval(changeSlide, time)
            break;
    }
}

window.addEventListener('keydown', keyChangeSlide)