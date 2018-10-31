var content = document.getElementById('content');

content.innerHTML = renderGame();

function init () {
  // console.info('Initializing this stupid game')
  content.innerHTML = renderGame();
  document.getElementsByClassName('pebble')[0].setAttribute('style', 'background-color: orange;')
  document.getElementsByClassName('pebble')[15].setAttribute('id', "last-pebble")
  addEvents()
  renderGame()
}

function renderGame() {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}


function addEvents () {
  targetEl = document.getElementsByClassName('btn')[0]
  // console.log(targetEl)
  targetEl.addEventListener('click', takePebbles)
}

function takePebbles (evt) {
  // click the button to fill pebbles with takeInput
  var pebblesAmount = document.getElementById('takeInput').value
  // console.log(pebblesAmount)
  // console.info('Take pebbles')
  colorPebbles()
}

function colorPebbles () {
  var pebblesAttribute = document.getElementsByClassName('pebble')
  var pebblesAmount = document.getElementById('takeInput').value
  var count = pebblesAmount
 
  for (i= 0; i < pebblesAttribute.length; i++) {
    if (pebblesAttribute[i].hasAttribute('style') && count !==0) {
      console.log('these are already colored')
    } else if (count !==0) {
      pebblesAttribute[i].setAttribute('style', 'background-color: orange;')
      count -= 1
    }
  }
  checkGame()
}


function switchPlayer () {
  // console.info(document.getElementsByClassName('mt-5')[0].innerHTML)
  if (document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 1's turn! How many pebbles will you take?") {
    document.getElementsByClassName('mt-5')[0].innerHTML = "It's player 2's turn! How many pebbles will you take?"
  } else {
    document.getElementsByClassName('mt-5')[0].innerHTML = "It's player 1's turn! How many pebbles will you take?"
  }
}

function checkGame () {
  var pebblesAttribute = document.getElementsByClassName('pebble')
  if (pebblesAttribute[15].hasAttribute('style') && document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 1's turn! How many pebbles will you take?") {
    gameOver()
  } else if (pebblesAttribute[15].hasAttribute('style') && document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 2's turn! How many pebbles will you take?") {
    gameOver()
  } else {
    console.info('the game continues')
  }
  switchPlayer()
}

function gameOver () {
  if (document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 1's turn! How many pebbles will you take?") {
  content.innerHTML += `<div class="container d-flex flex-column justify-content-start align-items-center">
                          <br>
                          <h2>Player 2 Wins!</h2>
                          <button onclick="init()">Play again</button>
                      </div>`
  } else {
      content.innerHTML += `<div class="container d-flex flex-column justify-content-start align-items-center">
                              <br>
                              <h2>Player 1 Wins!</h2>
                              <button onclick="init()">Play again</button>
                          </div>`
  }
}


document.addEventListener('DOMContentLoaded', init)