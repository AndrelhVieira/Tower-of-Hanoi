const body = document.getElementById('body');
const main = document.getElementsByTagName('main')[0];

const buildMenu = () => {
    const divMenu = document.createElement('div');
    divMenu.setAttribute('id', 'menu');

    const divDivDisks = document.createElement('div');
    divDivDisks.setAttribute('id', 'divDisks');

    const labelDivDisks = document.createElement('label');
    labelDivDisks.setAttribute('for', 'numberOfDisks')
    labelDivDisks.innerHTML = 'Number of disks';

    const inputDivDisks = document.createElement('input');
    inputDivDisks.setAttribute('type', 'number');
    inputDivDisks.setAttribute('name', 'numberOfDisks');
    inputDivDisks.setAttribute('id', 'numberOfDisks');
    inputDivDisks.setAttribute('min', '3');
    inputDivDisks.setAttribute('max', '8');

    const btnDivDisks = document.createElement('button');
    btnDivDisks.setAttribute('id', 'startGameBtn');
    btnDivDisks.innerHTML = 'Start Game';

    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id', 'restart');
    restartBtn.innerHTML = 'Restart Game';

    divDivDisks.appendChild(labelDivDisks);
    divDivDisks.appendChild(inputDivDisks);
    divDivDisks.appendChild(btnDivDisks);
    divDivDisks.appendChild(restartBtn);
    divMenu.appendChild(divDivDisks);
    ////////////////////////////////////////////////////

    const secTowers = document.createElement('section');
    secTowers.setAttribute('id', 'towers');

    const divStart = document.createElement('div');
    divStart.setAttribute('id', 'start');
    divStart.classList.add('tower');

    const divOffset = document.createElement('div');
    divOffset.setAttribute('id', 'offset');
    divOffset.classList.add('tower');

    const divEnd = document.createElement('div');
    divEnd.setAttribute('id', 'end');
    divEnd.classList.add('tower');

    secTowers.appendChild(divStart);
    secTowers.appendChild(divOffset);
    secTowers.appendChild(divEnd);
    ////////////////////////////////////////////////////

    const divBarTitle = document.createElement('div');
    divBarTitle.classList.add('bar-title');

    const divStartTitle = document.createElement('div');
    divStartTitle.innerHTML = "Start";

    const divOffsetTitle = document.createElement('div');
    divOffsetTitle.innerHTML = "Offset";

    const divEndTitle = document.createElement('div');
    divEndTitle.innerHTML = "End";

    divBarTitle.appendChild(divStartTitle);
    divBarTitle.appendChild(divOffsetTitle);
    divBarTitle.appendChild(divEndTitle);

    ///////////////////////////////////////////////////

    main.appendChild(divMenu);
    main.appendChild(secTowers);
    main.appendChild(divBarTitle);
}

const buildMainScript = () => {
    const mainScript = document.createElement('script');
    mainScript.setAttribute('src', 'main.js');
    body.appendChild(mainScript);
}

const removeBeg = () => {
    const divInicio = document.getElementById('inicio');
    main.removeChild(divInicio);
}

const initialBtn = document.getElementById('initialButton');
initialBtn.addEventListener('click', function(){

    buildMenu();

    buildMainScript();

    removeBeg();
})