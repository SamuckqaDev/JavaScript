const canvas = document.getElementById('sanke') //definir variável da cobra;
const context = canvas.getContext('2d')//renderizar desenho no canvas/ 2d para tratar como desenho;

let box = 32 //tamanho de cada quadradinho da canvas

let snake = []

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right'

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

function inicializeGame() {
    createBg();
    createSnake()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') {
        snakeX += box;
    }
    if (direction == 'left') {
        snakeX -= box;
    }
    if (direction == 'up') {
        snakeY -= box;
    }
    if (direction == 'down') {
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