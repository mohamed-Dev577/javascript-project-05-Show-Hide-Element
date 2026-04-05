let text = document.getElementById("text");

let hideBtn= document.getElementById("hideBtn");
let showBtn= document.getElementById("showBtn");

hideBtn.onclick = function(){
    text.style.display = "none";


   
}

showBtn.onclick = function(){

    text.style.display = "block";
}