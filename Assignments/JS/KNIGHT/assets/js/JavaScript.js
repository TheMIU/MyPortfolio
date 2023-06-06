let colors = ["#ffffff","#ffffff", "#ffcfd2", "#ff838e", "#ff2020", "#ff838e", "#ffcfd2", "#ffffff", "#ffffff"];
let divArray = document.querySelector("section").querySelectorAll("div");
let isStared = false;
let goLeft = false;
let audio = document.getElementById("audio");

let interval = setInterval(function () {
    if (isStared) {
        for (let i = 0; i < divArray.length; i++) {
            divArray[i].style.background = colors[i];
        }

        if(colors.indexOf("#ff2020")===6){
            goLeft = true;
        }

        if(colors.indexOf("#ff2020")===0){
            goLeft = false;
        }

        if(goLeft===false){
            let a = colors.pop();
            colors.unshift(a);
        }

        if(goLeft===true){
            let a = colors.shift();
            colors.push(a);
        }

    } else {
        for (let i = 0; i < divArray.length; i++) {
            divArray[i].style.background = colors[i];
        }
    }

}, 100);

function startQue() {
    isStared = true;
    audio.play();
}

function stopQue() {
    isStared = false;
    audio.pause();
}
