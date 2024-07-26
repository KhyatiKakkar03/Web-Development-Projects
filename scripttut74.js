let button=document.getElementById("btn")
button.addEventListener("click",()=>{
 document.querySelector(".box").innerHTML="Yayy you were clicked"
})
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;

}
setInterval(()=>{
    document.querySelector(".container").style.background=getRandomColor();

},3000);