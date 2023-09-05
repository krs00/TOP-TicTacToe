const gameBoard = (() => {

  const tiles = document.querySelectorAll('.tile')
  tiles.forEach((tile) => {
    tile.addEventListener('click', placeMark)
  })

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
  function placeMark(e) {

    e.target.appendChild(createElement()) 
    const pos1 = parseInt(e.target.getAttribute('data-index')[0])
    const pos2 = parseInt(e.target.getAttribute('data-index')[1])
    board[pos1][pos2] = `${turnControl.getCurrentTurn()}`
    turnControl.updateTurn()
    announceControl.update() 
    
    // console.log(board)
    // console.log(`Player ${turnControl.getCurrentTurn()}'s turn`)
  }

  // creates element to be appended to DOM
  function createElement() { 
      const span = document.createElement('span')
      span.classList.add(`${turnControl.getCurrentTurn()}marker`)
      span.innerText = `${turnControl.getCurrentTurn()}`
      return span
  }

  function checkGameStatus() {
    
  }

  return {
    initializeBoard,
    placeMark,
    checkGameStatus,
    board,
    createElement
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

  let display = document.querySelector('.announce-display') 
  
  function update() {
    display.innerText = `Player ${turnControl.getCurrentTurn()}'s turn`
  }

  return {
    update

  }
})();


