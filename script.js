const canvas = document.getElementById('sanke') //definir variável da cobra;
const context = canvas.getContext('2d')//renderizar desenho no canvas/ 2d para tratar como desenho;
 
let box = 32 //tamanho de cada quadradinho da canvas

function criarBg(){
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

criarBg()