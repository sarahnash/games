function byId (id) {
  return document.getElementById(id)
}

const containerEl = byId('container')

function buildPlayerTurn (playerTurn) {
  return '<div>CURRENT TURN: ' + playerTurn + '</div>'
}

function buildSquare (boxId, contents) {
  if (contents === null) {
    contents = ''
  }
  return '<div class="square" id="box' + boxId + '">' + contents + '</div>'
}

function buildRow (squares) {
  return '<div class="row">' +
          buildSquare(squares[0].id, squares[0].contents) +
          buildSquare(squares[1].id, squares[1].contents) +
          buildSquare(squares[2].id, squares[2].contents) +
          '</div>'
}

function buildBoard (board) {
  const row1 = [{id: 0, contents: board[0]},
                {id: 1, contents: board[1]},
                {id: 2, contents: board[2]}]

  const row2 = [{id: 3, contents: board[3]},
                {id: 4, contents: board[4]},
                {id: 5, contents: board[5]}]

  const row3 = [{id: 6, contents: board[6]},
                {id: 7, contents: board[7]},
                {id: 8, contents: board[8]}]

  return '<div class="board">' +
    buildRow(row1) +
    buildRow(row2) +
    buildRow(row3) +
  '</div>'
}

function buildGame (game) {
  // TODO: should return the full game
  return '<h1> Tic Tac Toe</h1>' +
          buildPlayerTurn(game.playerTurn) +
          buildBoard(game.board)
}

// when values change over time, the STATE of the game is not const
// let indicates this variable is STATEFUL = changes over time

let theGame = {
  playerTurn: 'X',
  board: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  winner: null,
  // winCoords: [[1, 0], [1, 1], [1, 2]]
}

function clickSquare (boxId) {
  if (!isValidBoxId(boxId)) {
    console.error('Invalid boxId passed to clickSquare function:' + boxId)
    return
  }

  takeTurn(theGame.playerTurn, boxId)
}

function clickContainer (evt) {
  const targetEl = evt.target
  // defensive
  if (!targetEl) return

  if (targetEl.classList.contains('square')) {
    console.log('you clicked on a square!')
    const elId = targetEl.id
    const idWithoutBox = elId.replace('box', '')
    const boxIdNumber = parseInt(idWithoutBox, 10)
    clickSquare(boxIdNumber)
  }
}

function addEvents () {
  console.info('Adding DOM events now')
  containerEl.addEventListener('click', clickContainer)
}

function init () {
  console.info('initializing function now!')
  addEvents()
  renderGame()
}

let renderCount = 0

function renderGame () {
  renderCount++
  console.info('Rendering game now! Render #' + renderCount)
  containerEl.innerHTML = buildGame(theGame)
}

function isValidBoxId (boxId) {
  return typeof boxId === 'number' &&
              boxId >= 0 &&
              boxId <= 8
}

function isValidPlayer (player) {
  return player === 'O' ||
        player === 'X'
}

function takeTurn (player, boxId) {
  // defensive state management
  if (theGame.playerTurn !== player) {
    console.error('It is ' + theGame.playerTurn + 's turn to play.')
    return
  }
  
  if (!isValidBoxId(boxId)) {
    console.error('Invalid boxId passed to takeTurn function: ' + boxId)
    return
  }

  if (theGame.board[boxId] !==null) {
    console.error('boxId' + boxId + ' already has a piece')
    return
  }

  theGame.board[boxId] = player
  theGame.playerTurn = player === 'X' ? 'O' : 'X'
  // ternary operator "if player turn is X then next player is O, else next player is O"

  // TODO: check if there is a winner

  renderGame()
}

document.addEventListener('DOMContentLoaded', init)

