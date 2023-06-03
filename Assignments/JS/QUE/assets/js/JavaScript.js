let colors = ["red", "yellow", "green", "blue", "deeppink", "orange"];
let divArray = document.querySelector("section").querySelectorAll("div");
let isStared = false;

setInterval(function () {
    if(isStared){
        for (let i = 0; i < divArray.length; i++) {
           // console.log(divArray[i]);
            divArray[i].style.background = colors[i];
        }
        let a = colors.pop();
        colors.unshift(a);
    }else {
        for (let i = 0; i < divArray.length; i++) {
            divArray[i].style.background = colors[i];
        }
    }

}, 300);

let arr = ["A", "B", "C", "D"];

function startQue() {
    isStared = true;
}

function stopQue() {
    isStared = false;
}
