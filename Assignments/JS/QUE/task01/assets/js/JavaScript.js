let letters = ["A", "B", "C", "D", "E", "F"];
let textArray = document.querySelector("section").querySelectorAll("p");
let isStared = false;

setInterval(function () {
    if(isStared){
        for (let i = 0; i < textArray.length; i++) {
            textArray[i].textContent = letters[i];
        }
        let a = letters.pop();
        letters.unshift(a);
    }else {
        for (let i = 0; i < textArray.length; i++) {
            textArray[i].textContent = letters[i];
        }
    }

}, 800);


function startQue() {
    isStared = true;
}

function stopQue() {
    isStared = false;
}
