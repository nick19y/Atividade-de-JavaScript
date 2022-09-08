const aleatorio = Math.floor(Math.random()*10);
const img = document.querySelector("img");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
if(aleatorio==0){
    img.setAttribute("src", "img/cachorro.webp");
}
else if (aleatorio==1){
    img.setAttribute("src", "img/cobra.jfif");
}
else if (aleatorio==2){
    img.setAttribute("src", "img/gato.jpg");
}
else if (aleatorio==3){
    img.setAttribute("src", "img/leao.webp");
}
else if (aleatorio==4){
    img.setAttribute("src", "img/lobo.jpg");
}
else if (aleatorio==5){
    img.setAttribute("src", "img/macaco.jpg");
}
else if (aleatorio==6){
    img.setAttribute("src", "img/panda.jpg");
}
else if (aleatorio==7){
    img.setAttribute("src", "img/tartaruga.jpg");
}
else if (aleatorio==8){
    img.setAttribute("src", "img/tigre.webp");
}
else if (aleatorio==9){
    img.setAttribute("src", "img/zebra.jpg");
}
btn1.addEventListener("click", function(){
    img.setAttribute("src", "img/cachorro.webp");
});
btn2.addEventListener("click", function(){
    img.setAttribute("src", "img/cobra.jfif");
});
btn3.addEventListener("click", function(){
    img.setAttribute("src", "img/gato.jpg");
});
btn4.addEventListener("click", function(){
    img.setAttribute("src", "img/leao.webp");
});
btn5.addEventListener("click", function(){
    img.setAttribute("src", "img/lobo.jpg");
});
btn6.addEventListener("click", function(){
    img.setAttribute("src", "img/macaco.jpg");
});
btn7.addEventListener("click", function(){
    img.setAttribute("src", "img/panda.jpg");
});
btn8.addEventListener("click", function(){
    img.setAttribute("src", "img/tartaruga.jpg");
});
btn9.addEventListener("click", function(){
    img.setAttribute("src", "img/tigre.webp");
});
btn10.addEventListener("click", function(){
    img.setAttribute("src", "img/zebra.jpg");
});
