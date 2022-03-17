const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let size = 15;
let isFirst = 1;

const growLi = function(){
    if(isFirst) {
        isFirst = 0;
        liItems.forEach(e => {
            e.style.display = "block";
        });
    }
    else {
        for(let i = 0; i<liItems.length; i++){
            liItems[i].style.fontSize = size + "px";
        }
        size++;

        // liItems.forEach(e => {
        //     e.style.fontSize = size + "px";
        // });
        // size++;
    }

}


btn.addEventListener("click", growLi);