const canvas = document.getElementById('sanke') //definir variável da cobra;
const context = canvas.getContext('2d')//renderizar desenho no canvas/ 2d para tratar como desenho;

let box = 32 //tamanho de cada quadradinho da canvas

let snake = []

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right'

let food = {
    x: Math.floor(Math.random() * 15 + 1 ) * box, 
    y:Math.floor(Math.random() * 15 + 1) * box
}

function createBg() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

//A cobra vai ser um array de cordenadas, adição e remoção do priemiro e ultumo valor;
function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood(){
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update) //keydown = evento de click;

function update(event) {
    if (event.keyCode == 37 && direction != 'right') {
        direction = 'left'
    } else if (event.keyCode == 38 && direction != 'down') {
        direction = 'up'
    } else if (event.keyCode == 39 && direction != 'left') {
        direction = 'right'
    } else if (event.keyCode == 40 && direction != 'up') {
        direction = 'down'
    }
}

function inicializeGame() {
    if (snake[0].x > 15 * box && direction == 'right') {
        snake[0].x = 0
    } else if (snake[0].x < 0 && direction == 'left') {
        snake[0].x = 16 * box;
    } else if (snake[0].y > 15 * box && direction == 'down') {
        snake[0].y = 0
    } else if (snake[0].y < 0 && direction == 'up') {
        snake[0].y = 16 * box
    }

    createBg()
    createSnake()
    drawFood()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') {
        snakeX += box;
    } else if (direction == 'left') {
        snakeX -= box;
    } else if (direction == 'up') {
        snakeY -= box;
    } else if (direction == 'down') {
        snakeY += box;
    }

    snake.pop(); //Retirar o ultimo elemento do Array;

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    snake.unshift(newHead) //acrescentar uma valor ao inicio;
}

let game = setInterval(inicializeGame, 100)