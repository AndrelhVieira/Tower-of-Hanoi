const start = document.getElementById('start');
const offset = document.getElementById('offset');
const end = document.getElementById('end');

const startDiscs = (n) => {
    let newDisc = document.createElement('div');

    newDisc.classList.add('disk')
    newDisc.classList.add('disk' + n);
    start.appendChild(newDisc);
}

const startGame = () => {
    start.innerHTML = "";

    if (numberOfDisks.value > 8) {
        alert('Escolha um valor entre 3 e 8!');
        return
    }

    for (let i = numberOfDisks.value; i > 0; i--) {
        startDiscs(i);
    }
}

// const firstTowerClick = (event) => {
//     let firstTower = event.currentTarget;

//     if (firstTower === start) {
//         let title = document.querySelector('.bar-title div:first-child');
//         title.classList.add('title-shadow');
//     } else if (firstTower === offset) {
//         let title = document.querySelector('.bar-title div:nth-child(2)');
//         title.classList.add('title-shadow');
//     } else {
//         let title = document.querySelector('.bar-title div:last-child');
//         title.classList.add('title-shadow');
//     }
// }

const startBtn = document.getElementById('startGameBtn');
startBtn.addEventListener('click', startGame);

const removeTarget = document.querySelector('section#towers');
removeTarget.addEventListener('click', function(e) {
    let targetClicked;
    if (e.target.classList.contains('disk')){
        let parentTarget = e.target.parentNode;
        targetClicked = parentTarget.lastElementChild;
    } else {
        targetClicked = e.target.lastElementChild;
    }
    
    return targetClicked;
})

const pasteTarget = document.querySelector('section#towers');
pasteTarget.addEventListener('click', function(e) {
    let targetClicked;
    if (e.target.classList.contains('disk')){
        let parentTarget = e.target.parentNode;
        targetClicked = parentTarget.lastElementChild;
    } else {
        targetClicked = e.target.lastElementChild;
    }
    
    return targetClicked;
});


