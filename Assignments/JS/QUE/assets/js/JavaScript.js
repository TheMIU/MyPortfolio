
let colors = ["red", "yellow", "green", "blue", "deeppink", "orange"];
let divArray = document.querySelector("section").querySelectorAll("div");

setInterval(function (){
   for (let i = 0; i<divArray.length; i++){
      console.log(divArray[i]);
      divArray[i].style.background = colors[i];
   }
   let a = colors.pop();
   colors.unshift(a);
},1000);

let arr = ["A","B","C","D"];

