let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true //playerx , playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//rest game button......
const resetGame = () => {
    turnO = true;
    draw_check = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}



//when user click on the boxes change the (x -> O) and (O -> x)
let draw_check = 0
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was cliked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        
        //to avoid multiple times click the button in same box...
        box.disabled = true;
        draw_check += 1

        const hasWinner = checkWinner();
        if (!hasWinner && draw_check === 9) {
            draw_match();
        }

    });
});




//after winnnig disable the remaining buttons...
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        
    }
}



//afte click on rest or newgame..enable the all the boxes..
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// showing if no one is win the  match...draw
let draw_match = () => {
    msg.innerText = "oops...no one won the  match...!";
    msgContainer.classList.remove("hide");
}



//showing the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); //hide is class name which is in css...
};


//checking the winner 
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val1 = boxes[pattern[0]].innerText;
        let pos2Val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;

        if (pos1Val1 != "" && pos2Val2 != "" && pos3val3 != ""){
            if(pos1Val1 === pos2Val2 && pos2Val2 === pos3val3){
                console.log("Winner", pos1Val1 );
                disableBoxes(); 
                showWinner(pos1Val1);
                return true;

            }
        }
    }
    return false;
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

