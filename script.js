const posiT = [
    -2, -2, -2, -2, -2,
    87, 87, 87, 87, 87,
    179, 179, 179, 179, 179,
    269, 269, 269, 269, 269,
    357, 357, 357, 357, 357    
];

const posiL = [
    -5, 85, 176, 266, 353,
    -5, 85, 176, 266, 353,
    -5, 85, 176, 266, 353,
    -5, 85, 176, 266, 353,
    -5, 85, 176, 266, 353
];

var tabuleiro = [
    'v1', 'v2', 'vs', 'v3', 'v4',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    'a1', 'a2', 'as', 'a3', 'a4'
];

let jogadoratual = 'a';

// Função para atualizar os elementos no tabuleiro
function atualizarTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i].startsWith('v') ||tabuleiro[i].startsWith('a') ) {
            // console.log(tabuleiro[i] + " " + i);
            // console.log("posição top " + posiT[i] + " posição left " + posiL[i]);

            let elemento = document.getElementById(tabuleiro[i]);
            if (elemento) {
                elemento.style.top = posiT[i] + 'px';
                elemento.style.left = posiL[i] + 'px';
            } else {
                console.error("Elemento " + tabuleiro[i] + " não encontrado.");
            }
        }
        
    }
}

function botoesPecas(player){
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i].startsWith(player)) {
            console.log(tabuleiro[i] + " " + i);
            // console.log("posição top " + posiT[i] + " posição left " + posiL[i]);

       // document.getElementById("bt"+i).style.visibility='visible';
        let elemento = document.getElementById("bt"+i);
            if (elemento) {
                elemento.style.visibility='visible';
            } else {
                console.error("Elemento " + "bt"+i+ " não encontrado.");
            }
        }
        
    }

}



// Array de sequência inicializada com zeros
let sequence = [0, 0, 0, 0, 0];

function botao(valor) {
    // Desloca os valores para a direita
    for (let i = sequence.length - 1; i > 0; i--) {
        sequence[i] = sequence[i - 1];
    }
    // Adiciona o novo valor na primeira posição
    sequence[0] = valor;
    
    // Exibe a sequência no console
    console.log(sequence.join(', ') + ',');
}

let cards = {
    bear: [-5, -6, 6, 0],
    boar: [-5, -1, 1, 0],
    cobra: [-1, -4, 6, 0],
    crab: [-5, -2, 2, 0],
    crane: [-5, 4, 6, 0],
    dog: [-1, -6, 4, 0],
    dragon: [4, 6, -3, -7],
    eel: [4, -6, 1, 0],
    elephant: [1, -1, -4, -6],
    fox: [1, -4, 6, 0],
    frog: [6, -2, -6, 0],
    giraffe: [-7, -3, 5, 0],
    goose: [-6, -1, 1, 6],
    horse: [-5, -1, 5, 0],
    iguana: [6, -5, -7, 0],
    kirin: [10, -9, -11, 0],
    mantis: [-4, -6, 5, 0],
    monkey: [6, 4, -4, -6],
    mouse: [4, 1, -5, 0],
    otter: [2, 6, -6, 0],
    ox: [1, 5, -5, 0],
    panda: [4, -4, -5, 0],
    phoenix: [2, -4, -2, -6],
    rabbit: [4, 2, -4, 0],
    rat: [6, -1, -5, 0],
    rooster: [4, -1, 1, -4],
    sable: [-4, -2, 4, 0],
    seasnake: [2, 4, -5, 0],
    tanuki: [4, -3, -5, 0],
    tiger: [5, -10, 0, 0],
    tortle: [2, 6, -2, 4],
    viper: [6, -2, -5, 0, 0]

};


// Aguarda o carregamento completo do DOM antes de chamar a função
// document.addEventListener('DOMContentLoaded', function() {
//     atualizarTabuleiro();
// });
