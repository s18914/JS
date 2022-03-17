let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy"
    const ul = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    for (let i = 0; i<10; i++){
        let li = document.createElement("li");
        li.style.fontSize = size + "px";
        li.textContent = "Element " + orderElement;
        document.querySelector("ul").appendChild(li);
        orderElement++;
        size++;
    }
}

init()