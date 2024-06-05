let hitvar=0;
let score=0;
function makeBubble(){
    let elem="";

for(let i=0;i<=118;i++){
    let rn=Math.floor(Math.random()*10);
     elem += `<div class="bubble">${rn}</div>`;
    
}
document.getElementById("bubblescontainer").innerHTML=elem;
}

function timerCount(){
    let start=60;
    var timer =  setInterval(() => {
    if(start>=0){
      
        document.getElementById("time").innerText=start--;
    }
    else{
        clearInterval(timer);
        document.getElementById("bubblescontainer").innerHTML="<h1> GAME OVER</h1>";
    } 
},1000);
}

function ranHit(){
hitvar=Math.floor(Math.random()*10);
document.getElementById("hitval").textContent=hitvar;
}

function increaseScore(){
score +=10;
document.getElementById("inscore").textContent=score;
}
document.getElementById("bubblescontainer").addEventListener("click",(dets)=>{
   var clickednum= Number(dets.target.textContent);
   if(clickednum===hitvar){
    increaseScore();
    makeBubble();
    ranHit();
   }
   else{
    document.getElementById("panel").innerHTML="";
   }
});

makeBubble();
timerCount();
ranHit();