const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let index1 = 0;
let index2 = 0;
const time = 500;

const addLetter = () => {
    if (index1 < txt.length) {

        //reset indeksów
        if (index2 === txt[index1].length) {
            index1++;
            index2 = 0;

            if (index1 === txt.length) clearInterval(addLetters);
            else {
                spnText.textContent = "";
            }
        }

        if (index1 <= txt.length && index2 < txt[index1].length){
            spnText.textContent += txt[index1][index2];
            index2++;
        }
    }
    console.log(index1, index2);
}

const addLetters = setInterval(addLetter, time);

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);