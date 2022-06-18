var cl1= document.querySelector(".cl1");
var cl2=document.querySelector(".cl2");
var body=document.getElementById("gd");
function Gradient(){
     body.style.background = "linear-gradient(to right,"+ cl1.value + ","+cl2.value+")";
}

cl1.addEventListener("input",Gradient);
cl2.addEventListener("input",Gradient);