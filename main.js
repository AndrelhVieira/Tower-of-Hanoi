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

// FUNÇÕES
// Cria nova div com a classe de estilização definida
const startDiscs = (n) => {
    let newDisc = document.createElement('div');

    newDisc.classList.add('disk')
    newDisc.classList.add('disk' + n);
    start.appendChild(newDisc);
}

// Inicia o game e gera o número de discos escolhidos
const startGame = () => {
    start.innerHTML = "";

    if (numberOfDisks.value > 8) {
        alert('Escolha um valor entre 3 e 8!');
        return;
    }

    for (let i = numberOfDisks.value; i > 0; i--) {
        startDiscs(i);
    }

    startBtn.setAttribute('disabled', 'disabled');
}

// Guarda o nó da torre clicada
const currentTower = (click) => {
    if (click.classList.contains('disk')) {
        parentClick = click.parentNode;
        targetClicked = parentClick.lastElementChild;
    } else {
        targetClicked = click.lastElementChild;
    }

    console.log(targetClicked);

    return targetClicked;
}

// verificar se o nó clicado é a Torre ou um disco
const conditionsClick = (a) => {
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
}

// Acopla o nó escolhido no primeiro clique para a segunda torre
// Refatorar
const newTower = (click, cTower) => {

    if (conditionsClick(click)) {
        click.appendChild(cTower);
    } else {
        let parentClick = click.parentNode;
        parentClick.appendChild(cTower);
    }

    console.log(click)
};

// Dá um restart no game;
const restartGame = () => {
    location.reload();
}

// EVENTOS

startBtn.addEventListener('click', startGame);

restartBtn.addEventListener('click', restartGame);

changeTower.addEventListener('click', function (e) {
    target = e.target;

    if (target.tagName !== 'DIV') {
        return
    }

    if (target === cTower || target.parentNode === cTower){
        return;
    }

    if (target.clientWidth === towerWidth){
        if (target.lastElementChild !== null && target.lastElementChild.clientWidth < cTowerWidth){
            return
        }
    }

    if (target.clientWidth !== towerWidth && target.clientWidth < cTowerWidth){
        return
    }

    console.log(state)
    if (state === cutState) {
        cTower = currentTower(target);
        if (cTower === null) {
            return
        }
        state = pasteState;
        cTowerWidth = cTower.clientWidth;
    } else {
        newTower(target, cTower);
        state = cutState;
        cTowerWidth = 0;
    };
});