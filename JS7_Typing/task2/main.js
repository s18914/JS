// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

const addLetter = () => {
 for(let i = 0; i < txt,length; i++) {
    spnText.textContent = "";
    for(let j = 0; j < txt[i].length; i++)
        spnText.textContent += txt[i][j];
       //if (indexText === txt[i].length) clearInterval(indexTyping);
 }
}

setTimeout(myGreeting, 5000)
addLetter();

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);