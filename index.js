





function rock(){
    document.querySelector("#user").setAttribute("src", "Images/fist.png")
}


function Paper(){
    document.querySelector("#user").setAttribute("src", "Images/hand-paper.png")
}


function scissor(){
    document.querySelector("#user").setAttribute("src", "Images/scissors.png")
}




function start(){
    var choose = Number(prompt("1 For Rock\n2 For Paper\n3 For Scissor"));
    
    if(choose == 1){
            rock();
    }else if(choose == 2){
        Paper();
    }else if(choose==3){
        scissor();
    }else{
        document.querySelector("#who").textContent = "Wrong Input By User";
    }


var rand = Math.floor(Math.random() * 4);
if(rand === 1){
    document.querySelector("#computer").setAttribute("src", "Images/fist.png");
}else if(rand == 2){
    document.querySelector("#computer").setAttribute("src", "Images/hand-paper.png")
}else{
    document.querySelector("#computer").setAttribute("src", "Images/scissors.png")
}


if(choose === rand){
    document.querySelector("#who").innerHTML = "DRAW";
}else if(choose === 1 && rand === 2){
    document.querySelector("#who").innerHTML = "You Lose!";
}else if(choose === 1 && rand === 3){
    document.querySelector("#who").innerHTML = "You Win!";
}else if(choose === 2 && rand === 1){
    document.querySelector("#who").innerHTML = "You Win!";
}else if(choose === 2 && rand === 3){
    document.querySelector("#who").innerHTML = "You Lose!";
}else if(choose === 3 && rand === 1){
    document.querySelector("#who").innerHTML = "You Lose!";
}else if(choose === 3 && rand === 2){
    document.querySelector("#who").innerHTML = "You Win!";
}





}













