const gameBoard = (() => {

  // gameboard matrix
  const board = [[null, null, null], 
                 [null, null, null], 
                 [null, null, null]]

  // resets the board to a blank slate
  function initializeBoard() { 
    
    const initialValue = null

      for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++) {
          board[i][j] = initialValue
        }
      }
  }
  // lets you place a mark on the gameboard
  function placeMark(a, b, value) {

    if (board[a][b] === null) {
      board[a][b] = value 
    } else if (board[a][b] !== null ) {
      console.log('you cant place things here!')
    } 

    checkGameStatus()
  }

  function checkGameStatus() {
    console.log('hi')
  }


  return {
    initializeBoard,
    placeMark,
    checkGameStatus,
    board
  }; 
})(); 


const turnControl = (() => {

  let currentTurn = 'Player 1'

  // Switches the current to to player 1 or player 2
  function updateTurn() {
    if (currentTurn === 'Player 1') {
      currentTurn = 'Player 2'
    } else if (currentTurn === 'Player 2') {
      currentTurn = 'Player 1'
    }
  }

  function getCurrentTurn() {
    console.log(currentTurn)
    return currentTurn
  }

  return {
    updateTurn,
    getCurrentTurn
  } 
})();
