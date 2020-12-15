const start = document.getElementById('start');

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

const startBtn = document.getElementById('startGameBtn');
startBtn.addEventListener('click', startGame);