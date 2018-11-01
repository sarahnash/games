var content = document.getElementById('content');

var rockPaperScissors = "Replace this with your own abstraction of Rock Paper Scissors"

content.innerHTML = renderGame(rockPaperScissors);

function init () {
  console.info('Initializing the game')
  addEvents()
  renderGame()
}

function renderGame(game) {
  // Change this render function to use the "game" parameter

  return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="buttons w-50 text-center">
                <button class="btn btn-primary">Rock</button>
                <button class="btn btn-primary">Paper</button>
                <button class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>ROCK</b></div>
                <div class="m-5">The computer played: <b>SCISSORS</b></div>
            </div>
            <h1 class="text-center">You win!</h1>
        </div>
    `
}

function addEvents () {
  var buttons = document.getElementsByClassName('buttons')[0]
  console.log(buttons)
  buttons.addEventListener('click', youPlayed)
}

function youPlayed (evt) {
  console.log('youclickedit')
  // fill in which event target you clicked on
  computerPlayed()
}

function computerPlayed (evt) {
  // generate random choice, happens when you click
  console.log('computer plays too')
}

function comparePlays (youPlayed, computerPlayed) {
  // logic to say s > p, r>s, p>r, tie
}

function declareWinner () {
  //says who won
}

document.addEventListener('DOMContentLoaded', init)