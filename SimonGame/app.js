//1.press any key the game will start 
//2.button flash + level in the place of  press any key to start

let gameSeq=[];
let userSeq=[];
let btn=["yellow","red","purple","green"];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let highest=0;
//first step we are checking the user press the any key or not.
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
    levelup();
   }
});

//we need increase the level

function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randmIdx=Math.floor(Math.random()*3);
    let randomcolor=btn[randmIdx];
  randomclass=document.querySelector(`.${randomcolor}`);
   gameSeq.push(randomcolor);
    btnflash(randomclass);
}

function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250);
}
function checkanswer(){
    let idx=userSeq.length-1;
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
       }

    }else{
        h3.innerHTML=`Game Over ! Your score was <b>${level} </b> <br> press any key start..`;
        let lowest=gameSeq.length;
        if(lowest>highest){
            highest=lowest;
        }
        h2.innerHTML=`Highest Score <i>${highest}</i>`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnpress(){
   let btn=this;
   btnflash(btn);
 
    let usercolor=btn.getAttribute("id");
   userSeq.push(usercolor);
   checkanswer();

}
let allBtns=document.querySelectorAll(".btn-group");

for(btns of allBtns){
    btns.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];

    level=0;

}