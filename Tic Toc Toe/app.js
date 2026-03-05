let btn1 = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let turn0 = true;

const winPattern= [
    [0,1,2],[0,3,6],[3,4,5], [1,4,7],[2,5,8],[6,7,8],[0,4,8],[2,4,6]
];
btn1.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "X";
            turn0=false;
        }else{
            box.innerText = "O";
            turn0=true;
        }
        box.disabled=true;
    });
});

for(let winner of winPattern){
    if( )
}

function reset() {
    btn1.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    });
    turn0=true;
}

resetbtn.addEventListener("click",reset);

