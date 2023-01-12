import { getInputDirection  }  from "./input.js";
export const speed = 5;
let newSegments = 0;
const snakeBody = [{x:11, y:11}]
export function update(){
    addSegements();

    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.y;
    snakeBody[0].y += inputDirection.x;
}
export function draw(gameBoard){
    snakeBody.forEach((segment, index) =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        if(index !== 0){
            snakeElement.classList.add('snake')
            
        }
        else{
            
            snakeElement.classList.add('sanke-head')
        }
        gameBoard.appendChild(snakeElement)
    })
} 

export function getSnakeHead(){
    return snakeBody[0]
}
export function getSnakeIntersection(){
    for(let i = 1; i < snakeBody.length; i++){
        if(snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y){
            return true;
        }
    }
}
export function expandSnake(expansionRate){
    newSegments += expansionRate;
}
export function onSnake(position, { ignoreHead = false } = {}) {
    // return snakeBody.some((segment, index) => {
    //   if (ignoreHead && index === 0) return false
    //   return equalPositions(segment, position)
    // })
    return snakeBody[0].x == position.x && snakeBody[0].y === position.y;
  }

  function addSegements() {
    for (let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
  
    newSegments = 0
  }
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }