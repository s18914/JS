const el = document.createElement("div");
document.body.appendChild(el);
document.body.style.height = "100000px";

let size = 0;
let isGrow = 1;

//style
el.style.width = "100%";
el.style.position = "fixed";
el.style.left = el.style.top = "0";
el.style.backgroundColor = "green";
el.style.height = size + "px";

const changeHeight = function(){

    if(isGrow){
        size+=4;
        el.style.height = size + "px";
    }
    else if(!isGrow){
        size-=4;
        el.style.height = size + "px";
    }

  if(size >= window.innerHeight/2 || size == 0){
    if(isGrow) {
        el.style.backgroundColor = "red";
    }
    else {
        el.style.backgroundColor = "green";
    }
    isGrow = !isGrow;
  }
};


window.addEventListener("scroll", changeHeight);
