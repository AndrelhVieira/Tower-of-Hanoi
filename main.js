// const newTower = (click, cTower) => {

//     parentClick = click.parentNode;
    
//     let conditionsTrueParent = parentClick.hasAttribute('id', 'start') || parentClick.hasAttribute('id', 'offset') || parentClick.hasAttribute('id', 'end');
    
//     let conditionsTrueClick = click.hasAttribute('id', 'start') || click.hasAttribute('id', 'offset') || click.hasAttribute('id', 'end');
//     // let conditionsTrue = conditionsTrueParent || conditionsTrueClick;

//     if (conditionsTrueClick) {
//         click.appendChild(cTower);
//     } else if (conditionsTrueParent) {
//         parentClick.appendChild(cTower);
//     };

//     console.log(click)
// };

////////////////////////////////////////////////////////////////////////////////////
// VARIÁVEIS
const start = document.getElementById('start');
const offset = document.getElementById('offset');
const end = document.getElementById('end');
const cutState = 1;
const pasteState = 2;
let state = cutState;
let cTower = '';
let cTowerWidth = 0;

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

const conditionsTrueClick = (a) => {
    let output = false;

    if (a.hasAttribute('id', 'start')){
        output = true;
    }

    if (a.hasAttribute('id', 'offset')){
        output = true;
    }

    if (a.hasAttribute('id', 'end')){
        output = true;
    }

    return output
}

// Acopla o nó escolhido no primeiro clique para a segunda torre
// Refatorar
const newTower = (click, cTower) => {

    pasteClick = click;

    if (conditionsTrueClick(pasteClick)){
        pasteClick.appendChild(cTower);
    } else {
        let parentClick = pasteClick.parentNode;
        parentClick.appendChild(cTower);
    }
    console.log(click)
};

// EVENTOS
const startBtn = document.getElementById('startGameBtn');
startBtn.addEventListener('click', startGame);

const changeTower = document.querySelector('section#towers');
changeTower.addEventListener('click', function (e) {
    const disc = e.target;

    if (disc.tagName !== 'DIV') {
        return
    }

    console.log(state);
    if (state === cutState) {
        cTower = currentTower(disc);
        if (cTower === null) {
            return
        } 
        state = pasteState;
        cTowerWidth = cTower.clientWidth;
    } else {
        newTower(disc, cTower);
        state = cutState;
    };

    // TESTE
});