// VARIÁVEIS
const tower = document.querySelector('.tower');
const towerWidth = tower.clientWidth;
const start = document.getElementById('start');
const offset = document.getElementById('offset');
const end = document.getElementById('end');
const restartBtn = document.getElementById('restart');
const startBtn = document.getElementById('startGameBtn');
const changeTower = document.querySelector('section#towers');
const cutState = 1;
const pasteState = 2;
let state = cutState;
let cTower = '';
let cTowerWidth = 0;
let disc;
let winningCombination = [];
let endCombination = [];


// FUNÇÕES
// Cria nova div com a classe de estilização definida
const startDiscs = (n) => {
    let newDisc = document.createElement('div');

    newDisc.classList.add('disk')
    newDisc.classList.add('disk' + n);
    start.appendChild(newDisc);
};

// Inicia o game e gera o número de discos escolhidos
const startGame = () => {
    start.innerHTML = "";

    if (numberOfDisks.value > 8 || numberOfDisks.value < 3) {
        alert('Please, pick a number between 3 and 8!');
        numberOfDisks.value = 5;
        return;
    }

    for (let i = numberOfDisks.value; i > 0; i--) {
        startDiscs(i);
    }

    winningArray();

    startBtn.setAttribute('disabled', 'disabled');
};

// verificar se o nó clicado é a Torre
const isTower = (a) => {
    let output = false;

    if (a.hasAttribute('id', 'start')) {
        output = true;
    }

    if (a.hasAttribute('id', 'offset')) {
        output = true;
    }

    if (a.hasAttribute('id', 'end')) {
        output = true;
    }

    return output
};

// Guarda o nó da torre clicada
const currentTower = (click) => {

    if (isTower(click)) {
        targetClicked = click.lastElementChild;
    } else {
        parentClick = click.parentNode;
        targetClicked = parentClick.lastElementChild;
    }

    console.log(targetClicked);

    return targetClicked;
};

// Acopla o nó escolhido na torre
const newTower = (click, cTower) => {

    if (isTower(click)) {
        click.appendChild(cTower);
    } else {
        parentClick = click.parentNode;
        parentClick.appendChild(cTower);
    }

    console.log(click)
};

// Dá um restart no game;
const restartGame = () => {
    start.innerHTML = '';
    offset.innerHTML = '';
    end.innerHTML = '';
    numberOfDisks.value = 5;
    startBtn.removeAttribute('disabled');
};

// Define a condição de vitória
const playerWins = () => {
    if (end.childElementCount == numberOfDisks.value){
        setTimeout(function(){alert('You won!'); },20)
        setTimeout(restartGame, 5000);
    }
};

// EVENTOS

startBtn.addEventListener('click', startGame);

restartBtn.addEventListener('click', restartGame);

changeTower.addEventListener('click', function (e) {
    target = e.target;

    if (target.tagName !== 'DIV') {
        console.log('erro 1');
        return
    }

    if (target === cTower || target.parentNode === cTower) {
        console.log('erro 2');
        state = cutState;
    }

    if (target.clientWidth === towerWidth) {
        if (target.lastElementChild !== null && target.lastElementChild.clientWidth < cTowerWidth) {
            console.log('erro 3');
            state = cutState;
        }
    }

    if (target.clientWidth !== towerWidth && target.clientWidth < cTowerWidth) {
        console.log('erro 4');
        state = cutState;
    }

    console.log(state)
    if (state === cutState) {
        cTower = currentTower(target);
        if (cTower === null) {
            console.log('erro 5');
            return
        }
        state = pasteState;
        cTowerWidth = cTower.clientWidth;
    } else {
        newTower(target, cTower);
        state = cutState;
        cTowerWidth = 0;
    };

    playerWins();
});