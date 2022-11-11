const raquette = document.querySelector(".raquette");
const ball = document.querySelector(".ball");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");
const tryAgain = document.querySelector(".try-again");

let by = 0;
let rx = 10;
let scorePoint = 1;

const randomLocalisation = () => {
    let x = (Math.random()*1000);
    if(x < 800)
    return x;
    else
    return randomLocalisation();
}

let bx = randomLocalisation();

const raquetteMoveHandler = (e) => {
    if (e.key == "ArrowRight") {
        rx += 10;
        raquette.style.left = rx + "px";
        if (raquette.style.left == "800px") {
            raquette.style.left = "0px";
            rx = 10;
        }
    }
    else if (e.key == "ArrowLeft") {
        rx -= 10;
        raquette.style.left = rx + "px";
        if (raquette.style.left == "-60px") {
            raquette.style.left = "740px";
            rx = 740;
        }
    }
}

const ballMovementHandler = () => {
    by = by + 10; 
    ball.style.top = by + "px" ;
    ball.style.left = bx + "px";
    if(ball.style.top == "560px"){
    clearInterval(ballMovement);
    ball.style.display = "none";
    raquette.style.display = "none";
    score.style.display = "none";
    gameOver.style.display = "block";
    tryAgain.style.display = "block";
}
    else if(ball.style.top == "540px" && bx < (rx + 60) && bx > (rx - 40)){
        ball.style.top = "0px";
        score.textContent = scorePoint;
        scorePoint++;
        by= 0;
        bx = randomLocalisation();
    }
}

const tryAgainClickHandler = (e)=>{
    gameOver.style.display = "none";
    tryAgain.style.display = "none";
    ball.style.display = "block";
    raquette.style.display = "block";
    score.style.display = "block";
    scorePoint = 0;
    by = 0;
    ballMovement = setInterval(ballMovementHandler,100);
}

const ballMovement = setInterval(ballMovementHandler,100);

tryAgain.addEventListener("click",tryAgainClickHandler);

document.addEventListener("keydown", raquetteMoveHandler);


