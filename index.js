const pingPongDiv = document.querySelector('#pingPongDiv');
const score = document.querySelector('#score');
const p1Score = document.querySelector('#player1Score');
const p2Score = document.querySelector('#player2Score');
const reset = document.querySelector('#resetButton');
const scoreInstructions = document.querySelector('#scoreInstructions');
let p1ScoreUpdater = 0
let p2ScoreUpdater = 0
const maxScore = document.querySelector('select')
let maxScoreComparative = 0

function valueGrabber() {
    maxScoreComparative = parseInt(maxScore.value)
}

function buttonsDip() {
    p1Score.style.display = 'none';
    p2Score.style.display = 'none';
}

function buttonsBack() {
    p1Score.style.display = 'inline-block';
    p2Score.style.display = 'inline-block';
}

function buttonReset() {
    score.innerHTML = ` <b> 0 to 0 </b> `
    p1ScoreUpdater = 0
    p2ScoreUpdater = 0
    maxScoreComparative = 0
    scoreInstructions.textContent = `Press the buttons to keep score`
    buttonsBack()
}

maxScore.addEventListener('change', function () {
    buttonReset();
    valueGrabber()
})

p1Score.addEventListener('click', function (e) {
    score.innerHTML = ` <b>${(p1ScoreUpdater += 1)} to ${p2ScoreUpdater}</b> `;
    valueGrabber();
    if (p1ScoreUpdater === maxScoreComparative) {
        scoreInstructions.textContent = `Player 1 WINS WOOOOOO`
        score.innerHTML = ` <b style = 'color:green'> ${p1ScoreUpdater} </b> to <b style = 'color:red' >${p2ScoreUpdater}</b> `;
        buttonsDip()
    }
})
p2Score.addEventListener('click', function (e) {
    score.innerHTML = `<b> ${(p1ScoreUpdater)} to ${p2ScoreUpdater +=1} </b>`;
    valueGrabber();
    if (p2ScoreUpdater === maxScoreComparative) {
        scoreInstructions.textContent = `Player 2 WINS WOOOOOO`
                score.innerHTML = ` <b style = 'color:red'> ${p1ScoreUpdater} </b> to <b style = 'color:green' >${p2ScoreUpdater}</b> `;

        buttonsDip()
    }
})

reset.addEventListener('click', function () {
        buttonReset()
    }

)

//ideas to clean up code:
//make a function for updating the buttons rather than having duplication
    //honestly too much work bc it's not a lot and that would require me changing the way I changed the colors from innerHTML to toggling a class