var squares = [0, 0, 0, 0, 0, 0, 0, 0, 0]


//gameplay

var setTurn = //set whose turn it is, starting with user, then alternating after user or AI makes play. If there is a winner, stop.

var promptPlayer = //if it is user's turn, display message telling them to play


var playerSelection = //capture user click on a td. In squares array, check if corresponding item is blank.  If so, update to 1. If not, do not change.

var showXMark = //if corresponding item in squares array has a 1, add "<i class="fa fa-times fa-4x"></i>" to the td


var aiSelection = //select an item from the squares array with a value of 0 and change it to 2

var showOMark = //if corresponding item in squares array has a 2, add "<i class="fa fa-circle-o fa-4x"></i>" to the td


//win combos

var playerWins = false //below functions set this to true if player has won

var threeAcrossTop = //if squares[0, 1, 2] are all equal to either 1 or 2, return true. If they are equal to 1, set playerWins var to true.

var threeAcrossCenter = //if squares[3, 4, 5] are all equal to either 1 or 2, return true. If they are equal to 1, set playerWins var to true.

var threeAcrossBottom = //if squares[6, 7, 8] are all equal to either 1 or 2, return true. If they are equal to 1, set playerWins var to true.

var threeDownLeft = //as above for squares[0, 3, 6]

var threeDownMiddle = //as above for squares[1, 4, 7]

var threeDownRight = //as above for squares[2, 5, 8]

var threeDiagonalLeft = //as above for squares[0, 4, 8]

var threeDiagonalRight = //as above for squares[2, 4, 6]


//game end

var winOrLose = //if any of the above win combos return true, check if playerWins is true or false. If true, display win message, if false, display lose message.

var tie = //if no items in squares array are equal to 0, game is over with no winner. Display tie message.


//reset game

var refresh = //if user clicks refresh button, reset the array to all 0s, and reset setTurn to player's turn
