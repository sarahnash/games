var content = document.getElementById('content')

var ticTacToe = "Replace this with your own abstraction of Tic Tac Toe"

content.innerHTML = renderGame(ticTacToe)

function init () {
  console.info('Initializing the game')
  addEvents()
  renderGame()
}

function renderGame (game) {
  // Change this render function to use the "game" parameter
  return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
        </div>
    `
}

function addEvents () {
  var buttons = document.getElementsByClassName('w-50')
  var i
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', youPlayed)
  }
}

function youPlayed (evt) {
  console.log('you clicked it')
  // put an X or O depedning on which player you are
  var player = document.getElementsByTagName('h4')[0]
  console.log(player)
  if (player.innerHTML === "It's player O's turn!") {
    evt.target.innerHTML = 'O'
  } else if (player.innerHTML === "It's player X's turn!") {
    evt.target.innerHTML = 'X'
  }
  checkGame()
}

function checkGame () {
  console.log('checking coordinates')
  // winning coordinates, if any are true
  // if no winner then keep going
  switchPlayer()
  endGame()
}

function switchPlayer () {
  var player = document.getElementsByTagName('h4')[0]
  if (player.innerHTML === "It's player O's turn!") {
    player.innerHTML = "It's player X's turn!"
  } else if (player.innerHTML === "It's player X's turn!") {
    player.innerHTML = "It's player O's turn!"
  }
  console.log(player.innerHTML)
}

function endGame () {
  // button to reset game, winner gets to go first?
  console.log('you won, play again?')
}

document.addEventListener('DOMContentLoaded', init)
