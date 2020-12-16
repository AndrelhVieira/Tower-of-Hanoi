// VARIÁVEIS
const tower = document.querySelector('.tower');
const towerWidth = tower.clientWidth;
const start = document.getElementById('start');
const offset = document.getElementById('offset');
const end = document.getElementById('end');
const restartBtn = document.getElementById('restart');
const startBtn = document.getElementById('startGameBtn');
const changeTower = document.querySelector('section#towers');
const movementCounts = document.getElementById('movementCount');
const victoryCounts = document.getElementById('victoryCount');
const messages = document.getElementById('message');
const cutState = 1;
const pasteState = 2;
const victoryMsg = "You won!";
const errorDiscsMsg = "Please pick a number between 3 and 8!";
const error1Msg = "Click in towers or discs";
const error3Msg = "Ooops! You have to choose a smaller disc to put above";
const error4Msg = "Ooops! You have to choose a smaller disc to put above";
let state = cutState;
let cTower = '';
let cTowerWidth = 0;
let disc;
let movementCounting = 0;
let childrenStart;
let childrenOffset = 0;
let childrenEnd = 0;
let victoryCounting = 0;

// FUNÇÕES
// Incrementa movimentos do jogador
const movementCount = () => {
    let output = false;

    if (childrenStart !== start.childElementCount) {
        output = true;
        childrenStart = start.childElementCount;
    }

    if (childrenOffset !== offset.childElementCount) {
        output = true;
        childrenOffset = offset.childElementCount;
    }

    if (childrenEnd !== end.childElementCount) {
        output = true;
        childrenEnd = end.childElementCount;
    }

    return output;
}

// Imprime mensagem
const printMessage = (msg, type) => {
    setTimeout(function () { messages.innerHTML = `${msg}`; messages.classList.add(`${type}`); }, 20);
    setTimeout(function () { messages.innerHTML = "<br>"; messages.classList.remove(`${type}`);}, 5000);
}

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
        printMessage(errorDiscsMsg, 'error');
        numberOfDisks.value = 5;
        return;
    }

    for (let i = numberOfDisks.value; i > 0; i--) {
        startDiscs(i);
    }

    childrenStart = numberOfDisks.value;
    childrenOffset = 0;
    childrenEnd = 0;
    movementCounting = 0;
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
    movementCounts.innerHTML = 0;
    messages.innerHTML = '<br>';
    numberOfDisks.value = 5;
    messages.classList.remove('error');
    messages.classList.remove('success');
    startBtn.removeAttribute('disabled');
    state = cutState;

};

// Define a condição de vitória
const playerWins = () => {
    if (end.childElementCount == numberOfDisks.value) {
        printMessage(victoryMsg, 'success');
        setTimeout(restartGame, 5000);
        victoryCounting++;
        victoryCounts.innerHTML = victoryCounting;
        state = cutState;
    }
};

// EVENTOS

startBtn.addEventListener('click', startGame);

restartBtn.addEventListener('click', restartGame);

changeTower.addEventListener('click', function (e) {
    target = e.target;

    if (target.tagName !== 'DIV') {
        console.log('error 1');
        state = cutState;
        printMessage(error1Msg, 'error');
        return
    }

    if (target === cTower || target.parentNode === cTower) {
        console.log('error 2');
        state = cutState;
    }

    if (target.clientWidth === towerWidth) {
        if (target.lastElementChild !== null && target.lastElementChild.clientWidth < cTowerWidth) {
            console.log('error 3');
            state = cutState;
            printMessage(error3Msg, 'error');
        }
    }

    if (target.clientWidth !== towerWidth && target.clientWidth < cTowerWidth) {
        console.log('error 4');
        state = cutState;
        printMessage(error4Msg, 'error');
    }

    console.log(state)
    if (state === cutState) {
        cTower = currentTower(target);
        if (cTower === null) {
            console.log('error 5');
            return
        }
        state = pasteState;
        cTowerWidth = cTower.clientWidth;
    } else {
        newTower(target, cTower);
        state = cutState;
        cTowerWidth = 0;
        if (movementCount()) {
            movementCounting++;
        }
    };

    playerWins();
    movementCounts.innerHTML = movementCounting;
});