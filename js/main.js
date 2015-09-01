//data for tic tac toe board

var squaresData = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var squaresElems = [].slice.call(document.querySelectorAll("td"))



//GAMEPLAY

//Select an item from the squaresData array with a value of 0 and return its index

var aiSelect = function() {
  var availSquareIndexes = squaresData.reduce(function(newArray, currentItem, index) {
    if (currentItem === 0) {
      return newArray.concat(index)
    } else {
      return newArray
    }
  }, [])
  return availSquareIndexes[Math.floor(Math.random() * availSquareIndexes.length)]
}


//Called on selection of a square. In squaresData array, check if corresponding item is blank.  If so, update to 1 if player, 2 if AI. If not, do not change.

var assignSquare = function(index, whoseTurn) {
  var data = squaresData[index]
  if (data === 0) {
    if (whoseTurn === "player") {
      squaresData[index] = 1
      squaresElems[index].innerHTML = "X"
    } else {
      squaresData[index] = 2
      squaresElems[index].innerHTML = "O"
    }
    return true
  } else {
    return false
  }
}



//WIN COMBOS

//indexes for win combos

var winCombos = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ],
]

//if data points referenced by combo INDEXES are all equal to 1 or all equal to 2, return true; else return false.

var checkWinCombo = function(combo) {
  return (
    combo.every(function(item) { return squaresData[item] === 1 }) ||
    combo.every(function(item) { return squaresData[item] === 2 })
  )
}

//return true if any win combos have been met

var checkWinCombos = function() {
  return winCombos.some(checkWinCombo)
}


//

//check if any of the remaining squares have a value of 0

var isInArray = function (value, array) {
  return array.indexOf(value) > -1;
}

var emptySquaresLeft = function() {
  return isInArray(0, squaresData)
}


//EXECUTION


document.querySelector("table").addEventListener("click", function(e){

  // player tries a move
  var playerTakesSquare = assignSquare(squaresElems.indexOf(e.target), "player")

  // if player picked occupied spot, return
  if (!playerTakesSquare) return

  // if someone won, the player won!
  if (checkWinCombos()) {
    return document.getElementById("message").innerHTML = "You Win! Grats!"
  }

  // if game is over, and noone won, it is a tie
  if (!emptySquaresLeft()) {
    return document.getElementById("message").innerHTML = "It's a tie! Try again."
  }

  // if game isnt over, let the AI go
  assignSquare(aiSelect())

  // if game is over, and someone won, the ai won!
  if (checkWinCombos()) {
    return document.getElementById("message").innerHTML = "You Lose. Try again!"
  }

  // if game is over, and noone won, it is a tie
  if (!emptySquaresLeft()) {
    return document.getElementById("message").innerHTML = "It's a tie! Try again."
  }

  // if game is not over, it is users turn again

})

//reset game - if user clicks refresh button, reset the array to all 0s and update the UI to match

document.getElementById("refresh").addEventListener("click", function() {
  squaresData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  squaresElems.forEach(function(td){td.innerHTML = ""})
  document.getElementById("message").innerHTML = ""
})
