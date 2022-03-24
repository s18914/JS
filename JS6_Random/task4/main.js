let pos = ['walcz', 'przemyś to jeszcze raz'];

document.querySelector('.add').addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if(input.value === "") return;
    pos.push(input.value);
    console.log(input.value);
});

document.querySelector('.clean').addEventListener('click', (e) => {
    e.preventDefault();
    pos = ['walcz', 'przemyś to jeszcze raz'];
});

document.querySelector('.showAdvice').addEventListener('click', (e) => {
    e.preventDefault();
    const indexPos = Math.floor(Math.random() * pos.length);
    console.log(indexPos);
    let result = ""
    result = pos[indexPos];
    document.querySelector('h1').textContent = result;
});

document.querySelector('.showOptions').addEventListener('click', (e) => {
    e.preventDefault();
    let s  = "";
    pos.forEach ((e) => {
        s = s + ', ' + e;
    })
    alert(s);
});