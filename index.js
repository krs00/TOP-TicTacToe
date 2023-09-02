const gameBoard = (() => {

  // gameboard matrix
  const board = [[0, 0, 0], 
                 [0, 0, 0], 
                 [0, 0, 0]]

  // resets the board to a blank slate
  function initializeBoard() {
      board = [[0, 0, 0], 
              [0, 0, 0], 
              [0, 0, 0]]
  }

  function placeMark(a, b, value) {
    board[a][b] = value
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



console.log(gameBoard.board)
gameBoard.placeMark(0,0, 'check') 