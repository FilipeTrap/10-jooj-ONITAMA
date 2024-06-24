


let jogadoratual = 2;
let jogadorInimigo = 1;
let cardjogado = '';
let carta1player1 = 'horse';
let carta2player1 = 'dragon';
let carta1player2 = 'boar';
let carta2player2 = 'horse';
let cartareserva = 'elephant';



const posiT = [
    [-2, -2, -2, -2, -2],
    [87, 87, 87, 87, 87],
    [179, 179, 179, 179, 179],
    [269, 269, 269, 269, 269],
    [357, 357, 357, 357, 357]   
];

const posiL = [
    [-5, 85, 176, 266, 353],
    [-5, 85, 176, 266, 353],
    [-5, 85, 176, 266, 353],
    [-5, 85, 176, 266, 353],
    [-5, 85, 176, 266, 353]
];



     
let tabuleiro = [
    [21, 22, 25, 23, 24],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [11, 12, 15, 13, 14]
  ];





  let testematriz = [
    [[-2,-2],[-2,-1],[-2,0],[-2,1],[-2,2]],
    [[-1,-2],[-1,-1],[-1,0],[-1,1],[-1,2]],
    [[0,-2],[0,-1],[0,0],[0,1],[0,2]],
    [[1,-2],[1,-1],[1,0],[1,1],[1,2]],
    [[2,-2],[2,-1],[2,0],[2,1],[2,2]],
  ];
  
  
  let cardsMatrizP1 = {
    bear: [[-1,0], [-1,-1],[1,1], [0]],
    boar: [[-1,0], [0,-1],[0,1], [0]],
    cobra: [[0,-1], [-1,1],[1,1], [0]],
    crab: [[-1,0], [0,-2],[0,2], [0]],
    crane: [[-1,0],[1,-1],[1,1], [0]],
    dog: [[0,-1], [-1,-1],[1,-1], [0]],
    dragon: [[1,-1],[1,1], [-1,2], [-1,-2]],
    eel: [[1,-1], [-1,-1],[0,1], [0]],
    elephant: [[0,1], [0,-1], [-1,1], [-1,-1]],
    fox: [[0,1], [-1,1],[1,1], [0]],
    frog: [[1,1], [0,-2], [-1,-1], [0]],
    giraffe: [[-1,-2], [-1,2],[1,0], [0]],
    goose: [[-1,-1], [0,-1],[0,1],[1,1]],
    horse: [[-1,0], [0,-1],[1,0], [0]],
    iguana: [[1,1], [-1,0], [-1,-2], [0]],
    kirin: [[-2,-1],[2,0], [-2,1], [0]],
    mantis: [[-1,1], [-1,-1],[1,0], [0]],
    monkey: [[1,1],[1,-1], [-1,1], [-1,-1]],
    mouse: [[1,-1],[0,1], [-1,0], [0]],
    otter: [[0,2],[1,1], [-1,-1], [0]],
    ox: [[0,1],[1,0], [-1,0], [0]],
    panda: [[1,-1], [-1,1], [-1,0], [0]],
    phoenix: [[0,2], [-1,1], [0,-2], [-1,-1]],
    rabbit: [[1,-1],[0,2], [-1,1], [0]],
    rat: [[1,1], [0,-1], [-1,0], [0]],
    rooster: [[1,-1], [0,-1],[0,1], [-1,1]],
    sable: [[-1,1], [0,-2],[1,-1], [0]],
    seasnake: [[0,2],[1,-1], [-1,0], [0]],
    tanuki: [[1,-1], [-1,2], [-1,0], [0]],
    tiger: [[1,0], [-2,0], [0], [0], [0]],
    turtle: [[0,2],[1,1], [0,-2],[1,-1]],
    viper: [[1,1], [0,-2], [-1,0], [0], [0]]
};

let cardsMatrizP2 = {
    bear: [[1, 0], [1, 1], [-1, -1], [0]],
    boar: [[1, 0], [0, 1], [0, -1], [0]],
    cobra: [[0, 1], [1, -1], [-1, -1], [0]],
    crab: [[1, 0], [0, 2], [0, -2], [0]],
    crane: [[1, 0], [-1, 1], [-1, -1], [0]],
    dog: [[0, 1], [1, 1], [-1, 1], [0]],
    dragon: [[-1, 1], [-1, -1], [1, -2], [1, 2]],
    eel: [[-1, 1], [1, 1], [0, -1], [0]],
    elephant: [[0, -1], [0, 1], [1, -1], [1, 1]],
    fox: [[0, -1], [1, -1], [-1, -1], [0]],
    frog: [[-1, -1], [0, 2], [1, 1], [0]],
    giraffe: [[1, 2], [1, -2], [-1, 0], [0]],
    goose: [[1, 1], [0, 1], [0, -1], [-1, -1]],
    horse: [[1, 0], [0, 1], [-1, 0], [0]],
    iguana: [[-1, -1], [1, 0], [1, 2], [0]],
    kirin: [[2, 1], [-2, 0], [2, -1], [0]],
    mantis: [[1, -1], [1, 1], [-1, 0], [0]],
    monkey: [[-1, -1], [-1, 1], [1, -1], [1, 1]],
    mouse: [[-1, 1], [0, -1], [1, 0], [0]],
    otter: [[0, -2], [-1, -1], [1, 1], [0]],
    ox: [[0, -1], [-1, 0], [1, 0], [0]],
    panda: [[-1, 1], [1, -1], [1, 0], [0]],
    phoenix: [[0, -2], [1, -1], [0, 2], [1, 1]],
    rabbit: [[-1, 1], [0, -2], [1, -1], [0]],
    rat: [[-1, -1], [0, 1], [1, 0], [0]],
    rooster: [[-1, 1], [0, 1], [0, -1], [1, -1]],
    sable: [[1, -1], [0, 2], [-1, 1], [0]],
    seasnake: [[0, -2], [-1, 1], [1, 0], [0]],
    tanuki: [[-1, 1], [1, -2], [1, 0], [0]],
    tiger: [[-1, 0], [2, 0], [0], [0], [0]],
    turtle: [[0, -2], [-1, -1], [0, 2], [-1, 1]],
    viper: [[-1, -1], [0, 2], [1, 0], [0], [0]]
};



let cardNames = [
    'bear',
    'boar',
    'cobra',
    'crab',
    'crane',
    'dog',
    'dragon',
    'eel',
    'elephant',
    'fox',
    'frog',
    'giraffe',
    'goose',
    'horse',
    'iguana',
    'kirin',
    'mantis',
    'monkey',
    'mouse',
    'otter',
    'ox',
    'panda',
    'phoenix',
    'rabbit',
    'rat',
    'rooster',
    'sable',
    'seasnake',
    'tanuki',
    'tiger',
    'turtle',
    'viper'
];








function ocultarbotoes(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
           // console.log(tabuleiro[i] + " " + i);
            // console.log("posição top " + posiT[i] + " posição left " + posiL[i]);

       // document.getElementById("p"+i).style.visibility='visible';
        let elemento = document.getElementById("bt"+i+j);
            if (elemento) {
                elemento.style.visibility='hidden';
                elemento.classList.remove('red-gradient');
                elemento.classList.remove('blue-gradient');
            } else {
                console.error("Elemento " + "bt"+i+ " não encontrado.");
            }
        
        }
    }
}



// isso eu fiz pra poder preencher as cartas mais rapido, é só olhar e clicar q ele gera o array
let coordArray = [];

function botao(x, y) {
   // console.log(this.id);
        coordArray.push([x, y]);
    
   // console.log(JSON.stringify(coordArray.map(coords => coords.reverse()).reverse()));
}


function jogada(){
    for (let i = 0; i < 4; i++) {
        if(cardNames[i]>0){
            let elemento = document.getElementById("p"+i);
            if (elemento) {
                elemento.style.visibility='visible';
            } else {
                console.error("Elemento " + "p"+i+ " não encontrado.");
            }
        

        }
       
     
 }

}


function atualizarTabuleiro() {
  
    //console.log("tabuleiro atualizado");

    let sabioAzulMorto = false;
    let sabioVermelhoMorto = false;

for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
        if (tabuleiro[i][j] == 15) {
            sabioAzulMorto = true;
        }
        if (tabuleiro[i][j] == 25) {
            sabioVermelhoMorto = true;
        }

        if(tabuleiro[0][2] == 15){
            console.error("Sabio Azul chegou no templo vermelho.");
            document.getElementById("blueWinTemplo").style.visibility='visible';
        }
        if(tabuleiro[4][2] == 25){
            console.error("Sabio vermelho chegou no templo azul.");
            document.getElementById("redWinTemplo").style.visibility='visible';
        }


        if (tabuleiro[i][j] != 0) {
            let elemento = document.getElementById("p" + tabuleiro[i][j]);
            //console.log("tabuleiro " + tabuleiro[i][j] + " na posição " + i + j);
            
            if (elemento) {
               
                elemento.style.top = posiT[i][j] + 'px';
                elemento.style.left = posiL[i][j] + 'px';
                elemento.style.transition = 'left 0.5s ease, top 0.5s ease';

               
            } else {
                console.error("Elemento " + tabuleiro[i][j] + " não encontrado.");
            }
        }
    }
}

if (!sabioAzulMorto) {
    console.error("Sabio Azul morreu.");
    document.getElementById("redWinSabio").style.visibility='visible';
}
if (!sabioVermelhoMorto) {
    console.error("sabio vermelho morreu.");
    document.getElementById("blueWinSabio").style.visibility='visible';
}

    // atualizar os cards, não consegui por um for, pq a concatenação de variaveis ficou muito dificil e nem o chatgpt conseguiu

    auxiliarAttCards(carta1player1,"cardsPlayer1-1")
    auxiliarAttCards(carta2player1,"cardsPlayer1-2")
    auxiliarAttCards(carta1player2,"cardsPlayer2-1")
    auxiliarAttCards(carta2player2,"cardsPlayer2-2")
    auxiliarAttCards(cartareserva,"cardSolto");


    function auxiliarAttCards(Variavel, id) {
        const div = document.getElementById(id);
    
        if (div) {
            div.innerHTML = '';
            const button = document.createElement('button');
            button.id = id + '-button';
            button.disabled = true; // Desativa o botão
    
            // Crie a imagem
            const img = document.createElement('img');
            img.className = 'imagem';
            img.src = 'assets/' + Variavel + '.png';
            img.alt = Variavel;
    
            // Adicione a imagem ao botão
            button.appendChild(img);
    
            // Adicione o botão à div
            div.appendChild(button);
    
            // Defina a função de clique no botão
            button.onclick = function() {
                cards(Variavel);
            };
    
            //console.log("Botão criado e desativado com imagem " + Variavel);
        } else {
            console.error('Div não encontrada.');
        }
    }

}





function cards(carta){
    console.log(carta);
    cardjogado = carta;
    botoesPecas(jogadoratual);
//   cardjogado = carta;
//   botoesPecas(jogadoratual);
//turnos()
document.getElementById('cardsPlayer1-1-button').disabled = true;
document.getElementById('cardsPlayer1-2-button').disabled = true;
document.getElementById('cardsPlayer2-1-button').disabled = true;
document.getElementById('cardsPlayer2-2-button').disabled = true;

document.getElementById('btnVoltar').disabled = false;


}

function voltar(){
    
    document.getElementById('btnVoltar').disabled = true;
  
    turnos();
    ocultarbotoes();
    
}


function turnos(){
    

    

    
    if(jogadoratual>2){
        jogadoratual = 1;
        jogadorInimigo = 2;
    }
    atualizarTabuleiro();
   ocultarbotoes();

    //console.error("jogador atual na função turnos "+jogadoratual);
document.getElementById('cardsPlayer1-1-button').disabled = true;
document.getElementById('cardsPlayer1-2-button').disabled = true;
document.getElementById('cardsPlayer2-1-button').disabled = true;
document.getElementById('cardsPlayer2-2-button').disabled = true;

if(jogadoratual == 1){
    jogadorInimigo = 2;
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = '#508dc2'; 
    document.getElementById('cardsPlayer1-1-button').disabled = false;
    document.getElementById('cardsPlayer1-2-button').disabled = false;
}
if(jogadoratual == 2){
    jogadorInimigo = 1;
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = '#c25050'; 
    //#c25050
    document.getElementById('cardsPlayer2-1-button').disabled = false;
    document.getElementById('cardsPlayer2-2-button').disabled = false;
}


}

function botoesPecas(player){
    
    console.log("jogador atual "+player);

    
    
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[1].length; j++) {
        let elemento = tabuleiro[i][j].toString(); 
      
        if (elemento.startsWith(player)) {
          //  console.log(tabuleiro[i][j] + " ");
            // console.log("posição top " + posiT[i] + " posição left " + posiL[i]);

       document.getElementById("bt"+i+j).style.visibility='visible';
        let elemento = document.getElementById("bt"+i+j);
            if (elemento) {
                elemento.style.visibility='visible';
                elemento.onclick = function() {                    
                    premove(tabuleiro[i][j], i,j, cardjogado)
                    
                };
            } else {
                console.error("Elemento " + "bt"+i+ " não encontrado.");
            }
        }
    }
    }

}


function premove(peça, L1,L2, cardAtual) {

    ocultarbotoes();

    // console.log('peças: ' + peça);
    // console.log('local 1: ' + local1);
    // console.log('local 2: ' + local2);
    // console.log('cardAtual: ' + cardAtual);
    let matriz;

    if (jogadoratual == 1){
        matriz = cardsMatrizP1[cardAtual];
    }
    else{
        matriz = cardsMatrizP2[cardAtual];
    }

   
  
    if (matriz) {
        for (let i = 0; i < 4; i++) {

            let bloco = matriz[i];

            if(bloco == 0){
                continue
            }              

                let valoresmatriz;

                if (jogadoratual == 1){
                     valoresmatriz = cardsMatrizP1[cardAtual][i];
                }
                else{
                    valoresmatriz = cardsMatrizP2[cardAtual][i];
                }



               // console.log('valoresmatriz: ' + valoresmatriz);
                let MoveX = valoresmatriz[0];
                let MoveY = valoresmatriz[1]; 
             
                
                // console.log('L1: ' + L1);//aqui é o lugar atual
                // console.log('L2: ' + L2);
                // console.log('MoveX: ' + MoveX); //aqui é pra onde vai
                // console.log('MoveY: ' + MoveY);

                

               
                    //console.log(bloco);
    
                    let buttonId = 'bt' + (L1+ MoveX) + (L2+ MoveY);
                    
                   // console.log('buttonId: ' + buttonId);
                    let button = document.getElementById(buttonId);
                    if (!button || tabuleiro[L1 + MoveX][L2 + MoveY].toString().startsWith(jogadoratual.toString())) {
                        continue
                    }
                    if (button) {


                        if (tabuleiro[L1 + MoveX][L2 + MoveY].toString().startsWith(jogadorInimigo.toString())) {
                            button.classList.add('red-gradient');
                            button.onclick = function() {
                                captura(L1,L2,MoveX,MoveY,cardAtual);
                            };
                        }
                        else{
                            button.classList.add('blue-gradient');
                            
                            button.onclick = function() {
                                movimento(L1,L2,MoveX,MoveY,cardAtual);
                            };
                        }

                        
                        
                        //azul
                        
                        button.style.visibility = 'visible';
                        button.style.zIndex = 10;


    
                       
                    } else {
                        console.error('Botão não encontrado com o ID: ' + buttonId);
                    }
        }
    } else {
        console.error('Matriz não encontrada para o valor ' + cardAtual);
    }
}



function movimento(L1,L2,MoveX,MoveY,cardAtual){


    if(cardAtual == carta1player1){
        let cardauxiliar = carta1player1;
        carta1player1 = cartareserva;
        cartareserva = cardauxiliar;
    }
    if(cardAtual == carta2player1){
        let cardauxiliar = carta2player1;
        carta2player1 = cartareserva;
        cartareserva = cardauxiliar;
    }

    if(cardAtual == carta1player2){
        let cardauxiliar = carta1player2;
        carta1player2 = cartareserva;
        cartareserva = cardauxiliar;
    }
    if(cardAtual == carta2player2){
        let cardauxiliar = carta2player2;
        carta2player2 = cartareserva;
        cartareserva = cardauxiliar;
    }


   

    let peça = tabuleiro[L1][L2];
    let destino = tabuleiro[L1 + MoveX][L2 + MoveY];
    tabuleiro[L1 + MoveX][L2 + MoveY] = peça;
    tabuleiro[L1][L2] = destino;
    atualizarTabuleiro();
    //voltar();
    jogadoratual++;
    turnos();
    
    console.log("movimento final realizado")
    document.getElementById('btnVoltar').disabled = true;

}
function captura(L1,L2,MoveX,MoveY,cardAtual){

    let cardauxiliar = cardAtual;
    cardAtual = cartareserva;
    cartareserva = cardauxiliar;

    let peça = tabuleiro[L1][L2];
    let destino = 0;

   let elemento = document.getElementById("p"+tabuleiro[L1 + MoveX][L2 + MoveY]);
   elemento.style.visibility='hidden';


    tabuleiro[L1 + MoveX][L2 + MoveY] = peça;
    tabuleiro[L1][L2] = destino;
    atualizarTabuleiro();
    //voltar();
    console.log("captura realizada")
    document.getElementById('btnVoltar').disabled = true;
    jogadoratual++;
    turnos();

}

//pra sortear as cartas 
function assignRandomCards() {
    let availableCards = [...cardNames];

    function getRandomCard() {
        let randomIndex = Math.floor(Math.random() * availableCards.length);
        let card = availableCards[randomIndex];
        availableCards.splice(randomIndex, 1);
        return card;
    }

    carta1player1 = getRandomCard();
    carta2player1 = getRandomCard();
    carta1player2 = getRandomCard();
    carta2player2 = getRandomCard();
    cartareserva = getRandomCard();
 
}


  document.addEventListener('DOMContentLoaded', function() {
    assignRandomCards()
    jogadoratual++;
    turnos();
});