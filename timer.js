let timer = document.querySelector(".timer")
let player = document.querySelector(".player")

function click(){ 
    timer = setTimeout(() => {
        if(timer <= 0){
            timer = 3000
        }else{
            timer = 15
        }
    });
}