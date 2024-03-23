// 1.define - zarah
var playerChoise=document.querySelector(".yourChoise")
var computerChoise=document.querySelector(".computerChoise")
var winner =document.querySelector(".winner");
var random;
var computer;
var pCount=0, cCount=0;
var pPoint=document.querySelector(".pCount")
var cPoint=document.querySelector(".cCount")
function play(player){
    if(player=="scissors"){
        playerChoise.innerText="Player:scissors"
    }else if(player=="rock"){
        playerChoise.innerText="Player:rock"
    }else if(player=="paper"){
        playerChoise.innerText="Player:paper"
    }
    random= Math.floor(Math.random()*3);
    console.log(random)

    if(random==0){
        computerChoise.innerText="Computer:scissors"
        computer="scissors"
    }else if(random==1){
        computerChoise.innerText="Computer:rock"
        computer="rock"
    }else if(random==2){
        computerChoise.innerText="Computer:paper"
        computer="paper"
    }
    if((player=="paper" && computer=="rock")||
       (player=="scissors" && computer=="paper")||
       (player=="rock" && computer=="scissors")){
        winner.innerText="Result:Player win!";
        pCount++;
        pPoint.innerText="Player:"+pCount;
    }else if (player==computer){
        winner.innerText="Result:Tie!";
    }else{
        winner.innerText="Result:Computer win!";
        cCount++;
        cPoint.innerText="Computer:"+cCount;
    }
}
function restart(){
    cCount=0;
    pCount=0;
    winner.innerText="Result:";
    playerChoise.innerText="Player:";
    computerChoise.innerText="Computer:";
    cPoint.innerText="Computer:"+cCount;
    pPoint.innerText="Player:"+pCount;
}
