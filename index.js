const gameBoard = (() => {

  // gameboard matrix
  const board =[[null, null, null], 
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
    // check to see if spot is taken first 
    if (board[a][b] === null) { 
      board[a][b] = value 
    } else if (board[a][b] !== null ) {
      console.log(`you can't place things there!`)
    } 

    checkGameStatus()
  }

  function checkGameStatus() {
    
  }

  return {
    initializeBoard,
    placeMark,
    checkGameStatus,
    board
  }; 
})(); 


const turnControl = (() => {

  let currentTurn = 'X' 
  // Switches the current to to player X or player O
  function updateTurn() {
    if (currentTurn === 'X') {
      currentTurn = 'O'
    } else if (currentTurn === 'O') {
      currentTurn = 'X' 
    }
  }

  function getCurrentTurn() {
    return currentTurn
  }

  return {
    updateTurn,
    getCurrentTurn
  } 
})();

const announceControl = (() => {

  const announceDisplay = document.querySelector('.announce-display')
  console.log(announceDisplay.innerText)

  return {

  }
})();


