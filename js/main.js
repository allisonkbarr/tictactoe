//data for tic tac toe board

var squares = [0, 0, 0, 0, 0, 0, 0, 0, 0]



//STATE

//state capturing whether it is the player's turn

var playersTurn = true

//state capturing whether game is in progress or done

var gameActive = true

//state capturing whether the player has won

var playerWins = false



//GAMEPLAY

//if it is user's turn, display message telling them to play

var promptPlayer = function() {
  if (playersTurn) {
    alert("Your turn! Click on an empty square to mark it with an X.")
  }
}

//capture user click on a td. In squares array, check if corresponding item is blank.  If so, update to 1. If not, do not change.

var playerSelection =

//if corresponding item in squares array has a 1, add "<i class="fa fa-times fa-4x"></i>" to the td

var showXMark =

//select an item from the squares array with a value of 0 and change it to 2

var aiSelection =

//if corresponding item in squares array has a 2, add "<i class="fa fa-circle-o fa-4x"></i>" to the td

var showOMark =



//WIN COMBOS

//function for checking if all values in an array are equal

Array.prototype.allValuesSame = function() {
    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }
    return true;
}

//if squares[x, y, z] are all equal to 1, return "player"; if all equal to 2, return "AI"; else return false.

var squareChecker = function(x, y, z) {
  if ([squares[x], squares[y], squares[z]].allValuesSame()) {
    if (squares[x] === 0) {
      return false
    } else if (squares[x] === 1) {
      return "player"
    } else {
      return "AI"
    }
  } else {
    return false
  }
}

//apply squareChecker to all the win combos

var checkers = [
  var threeAcrossTop = function() {
    squareChecker(0, 1, 2)
  },
  var threeAcrossCenter = function() {
    squareChecker(3, 4, 5)
  },
  var threeAcrossBottom = function() {
    squareChecker(6, 7, 8)
  },
  var threeDownLeft = function() {
    squareChecker(0, 3, 6)
  },
  var threeDownMiddle = function() {
    squareChecker(1, 4, 7)
  },
  var threeDownRight = function() {
    squareChecker(2, 5, 8)
  },
  var threeDiagonalLeft = function() {
    squareChecker(0, 4, 8)
  },
  var threeDiagonalRight = function() {
    squareChecker(2, 4, 6)
  },
]


//END OF TURN - the below needs to be done at the end of each turn

//check if any of the win combos return "player" or "AI"; if they return "player", set playerWins to true;
//if they return either "player" or "AI", set gameActive state to false

var checkWinCombos = function() {
  if (checkers.some(function(winner) {return winner === "player"})) {
      playerWins = true
      gameActive = false
      return true
  } else {
      if (checkers.some(function(winner) {return winner === "AI"})) {
        gameActive = false
        return true
      } else {
        return false
      }
  }
}

//check if any of the remaining squares have a value of 0, and if not set gameActive state to false

var isInArray = function (value, array) {
  return array.indexOf(value) > -1;
}

var emptySquares = function() {
  if (isInArray(0, squares)) {
    return true
  } else {
    gameActive = false
    return false
  }
}

//if game is still active, set whose turn it is, alternating from previous

var changeTurn = function() {
  if (gameActive = true) {
    return playersTurn = !playersTurn
  }
}


//GAME END

//if gameActive is false and checkWinCombos is true, check if playerWins is true, and if so display win message. if false, display lose message.

var winOrLose = function() {
  if (!gameActive && checkWinCombos()) {
    if (playerWins) {
      alert("You Win! Grats!")
    } else {
      alert("You Lose. Try Again!")
    }
  }
}


//if emptySquares is false, and checkWinCombos is false, game is over with no winner. Display tie message.

var tie = function() {
  if (!emptySquares() && !checkWinCombos) {
    alert("It's a tie! Try again.")
  }
}



//reset game

var refresh = //if user clicks refresh button, reset the array to all 0s, and reset setTurn to player's turn



//EXECUTION

promptPlayer()
