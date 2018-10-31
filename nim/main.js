var content = document.getElementById('content');

var nim = "Replace this with your own abstraction of Nim"

content.innerHTML = renderGame(nim);


function renderGame(game) {
    // Change this render function to use the "game" parameter

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

function init () {
  console.info('Initializing this stupid game')
  document.getElementsByClassName('pebble')[0].setAttribute('style', 'background-color: orange;')
  addEvents()
  renderGame()
}

function addEvents () {
  targetEl = document.getElementsByClassName('btn')[0]
  console.log(targetEl)
  targetEl.addEventListener('click', takePebbles)
}

function takePebbles (evt) {
  // click the button to fill pebbles with takeInput
  var pebblesAmount = document.getElementById('takeInput').value
  console.log(pebblesAmount)
  console.info('Take pebbles')
  colorPebbles()
}

function colorPebbles () {
  var pebblesAttribute = document.getElementsByClassName('pebble')
  var pebblesAmount = document.getElementById('takeInput').value
  var count = pebblesAmount
  console.info(count)

  for (i= 0; i < pebblesAttribute.length; i++) {
    if (pebblesAttribute[i].hasAttribute('style') && count !==0) {
      console.log('these are already colored')
    } else if (count !==0) {
      pebblesAttribute[i].setAttribute('style', 'background-color: orange;')
      count -= 1
    }
  }
  switchPlayer()
}

function switchPlayer () {
  // need loop to see which player turn it is
  console.log(document.getElementsByClassName('mt-5')[0]) 
  if document.getElementsByClassName('mt-5')[0] === "It's player 1's turn!  How many pebblies will you take?"
    // return document.getElementsByClassName('mt-5')[0].innerHTML = "It's player 2's turn!  How many pebblies will you take?"

}

function checkGame () {
  // last pebble means game is over, the other player wins
}

document.addEventListener('DOMContentLoaded', init)