
import { onSnake, expandSnake } from "./snake.js";
import { randomGrid } from "./grid.js";
let foodPos = {x:10, y:1}
const EXPANSION_RATE = 1
export function update() {
    if(onSnake(foodPos)){
        expandSnake(EXPANSION_RATE);
        foodPos = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {

    const food = document.createElement('div')
    food.style.gridRowStart = foodPos.x;
    food.style.gridColumnStart = foodPos.y;
    food.classList.add('food')
    gameBoard.appendChild(food)
} 



function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGrid();
    }
    return newFoodPosition;
}