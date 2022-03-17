const btn = document.querySelector("button"); //get first button
const list = document.querySelector("ul");
let number = 1;
//btn.addEventListener("click",  function(){  //anonymous function
//    console.log("click");
//})
const addElement = function(){
    const li = document.createElement('li')
    li.textContent = number
    if(number%3 === 0) {
        li.classList.add("bigger");
    }
    list.appendChild(li)
    number = number + 2;
}

btn.addEventListener("click", addElement);