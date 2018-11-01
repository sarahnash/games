var content = document.getElementById('content')

var rockPaperScissors = 'Ask Chris was exactly should go here?'

content.innerHTML = renderGame(rockPaperScissors)

function init () {
  console.info('Initializing the game')
  addEvents()
  renderGame()
}

function renderGame () {
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
            <h1 class="winner text-center">You win!</h1>
        </div>
    `
}

function addEvents () {
  var buttons = document.getElementsByClassName('buttons')[0]
  buttons.addEventListener('click', youPlayed)
}

function youPlayed (evt) {
  var yourPlay = document.getElementsByClassName('m-5')[0]
  // fill in which event target you clicked on
  if (evt.target.innerHTML === 'Rock') {
    yourPlay.innerHTML = 'You played: <b>ROCK</b>'
  } else if (evt.target.innerHTML === 'Paper') {
    yourPlay.innerHTML = 'You played: <b>PAPER</b>'
  } else if (evt.target.innerHTML === 'Scissors') {
    yourPlay.innerHTML = 'You played: <b>SCISSORS</b>'
  }
  computerPlayed()
}

function computerPlayed () {
  var computerPlays = document.getElementsByClassName('m-5')[1]
  var choices = ['ROCK', 'PAPER', 'SCISSORS']
  var computerChoice = choices[Math.floor(Math.random() * choices.length)]
  computerPlays.innerHTML = 'The computer played: <b>' + computerChoice + '</b>'
  comparePlays()
}

function comparePlays () {
  var yourPlay = document.getElementsByClassName('m-5')[0]
  var computersPlay = document.getElementsByClassName('m-5')[1]
  if (yourPlay.innerHTML === 'You played: <b>ROCK</b>' && computersPlay.innerHTML === 'The computer played: <b>ROCK</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = "It's a TIE!"
  } else if (yourPlay.innerHTML === 'You played: <b>ROCK</b>' && computersPlay.innerHTML === 'The computer played: <b>PAPER</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'Computer Wins!'
  } else if (yourPlay.innerHTML === 'You played: <b>ROCK</b>' && computersPlay.innerHTML === 'The computer played: <b>SCISSORS</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'You Win!'
  } else if (yourPlay.innerHTML === 'You played: <b>PAPER</b>' && computersPlay.innerHTML === 'The computer played: <b>ROCK</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'You Win!'
  } else if (yourPlay.innerHTML === 'You played: <b>PAPER</b>' && computersPlay.innerHTML === 'The computer played: <b>PAPER</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = "It's a TIE!"
  } else if (yourPlay.innerHTML === 'You played: <b>PAPER</b>' && computersPlay.innerHTML === 'The computer played: <b>SCISSORS</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'Computer Wins!'
  } else if (yourPlay.innerHTML === 'You played: <b>SCISSORS</b>' && computersPlay.innerHTML === 'The computer played: <b>ROCK</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'Computer Wins!'
  } else if (yourPlay.innerHTML === 'You played: <b>SCISSORS</b>' && computersPlay.innerHTML === 'The computer played: <b>PAPER</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = 'You Win!'
  } else if (yourPlay.innerHTML === 'You played: <b>SCISSORS</b>' && computersPlay.innerHTML === 'The computer played: <b>SCISSORS</b>') {
    document.getElementsByClassName('winner')[0].innerHTML = "It's a TIE!"
  }
}

document.addEventListener('DOMContentLoaded', init)
