let lastRenderTime = 0;
import {update as udateSnake, draw as drawSnake, speed , getSnakeHead, getSnakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid  } from './grid.js';
const gameBoard = document.querySelector("#game-board")
let gameOver = false;
function main(currentTime){

    const secondsTillLastRender = (currentTime - lastRenderTime)/1000;

    window.requestAnimationFrame(main)
    if(secondsTillLastRender < 1/ speed){
        return;
    }
    // console.log('render')
    lastRenderTime = currentTime;
    // console.log(secondsTillLastRender)     
    update();
    draw();
    if(checkDeath()){
        location.reload()
    }
}

window.requestAnimationFrame(main)

function update(){
    udateSnake();
    updateFood();
}
function draw(){
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard);
}

function checkDeath(){
    return outsideGrid(getSnakeHead()) || getSnakeIntersection();

}