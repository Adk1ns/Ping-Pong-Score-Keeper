const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    wins: 0,
    games: document.querySelector('#p1Games')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    wins: 0,
    games: document.querySelector('#p2Games')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;
let numGames = document.querySelector('#numGames');
let newSeries = document.querySelector('#newSeries')



function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            if(p1.score > p2.score) {
                banner.src="download.jpeg";
            } else if(p1.score < p2.score) {
                banner.src="images.jpeg";
            }
            updateWins();
        }
        player.display.textContent = player.score;
    }
}



p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})
newSeries.addEventListener('click', function () {
    p1.wins = 0;
    p2.wins = 0;
    newSeries.style.visibility = "hidden";
    resetButton.disabled = false;
    champ.textContent = " ";
    p1Games.textContent = "0";
    p2Games.textContent = "0";
    reset();
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        banner.src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80";
    }
}


let p1Games = document.querySelector('#p1Games');
let p2Games = document.querySelector('#p2Games');
let champ = document.querySelector('#champion');


function updateWins() {
    if (isGameOver) {
        if(p1.score > p2.score) {
            p1.wins += 1;
            p1Games.textContent = p1.wins;
        } else {
        p2.wins += 1;   
        p2Games.textContent = p2.wins;
        }
        
    }
    if (p1.wins == numGames.value) {
        banner.src="rocky.jpg"
        resetButton.disabled = true;
        champ.textContent = "Player one is the champion! ! ! ";
        newSeries.style = "visible";
    } else if (p2.wins == numGames.value) {
        banner.src="ron.jpg"
        resetButton.disabled = true;
        champ.textContent = "Player two is the champion! ! ! "
        newSeries.style = "visible";
    }
}


