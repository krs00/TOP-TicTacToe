const gameBoard = (() => {

  const tiles = document.querySelectorAll('.tile')
  tiles.forEach((tile) => {
    tile.addEventListener('click', placeMark)
  })

  const restart = document.querySelector('.restart-btn')

  restart.addEventListener('click', initializeBoard)



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

      tiles.forEach((tile) => {
        if (tile.hasChildNodes()) {
          tile.childNodes[0].remove();
        }
      })  

      announceControl.initialize()
      turnControl.initialize()

  }

  // lets you place a mark on the gameboard
  function placeMark(e) {


  if (e.target.hasChildNodes() == false) {
    e.target.appendChild(createElement())
    const pos1 = parseInt(e.target.getAttribute('data-index')[0])
    const pos2 = parseInt(e.target.getAttribute('data-index')[1])
    board[pos1][pos2] = `${turnControl.getCurrentTurn()}`

  
    let win = checkWinner(turnControl.getCurrentTurn())

    if (win == true) {
      disableMarking()  
      announceControl.win()  
    } else if (win == undefined && tie() === 9) {
      announceControl.draw() 
    } else if (win === undefined) {
      turnControl.updateTurn() 
      announceControl.update()
    }

    }
  }

  // creates element to be appended to DOM
  function createElement() { 
      const span = document.createElement('span')
      span.classList.add(`${turnControl.getCurrentTurn()}marker`)
      span.innerText = `${turnControl.getCurrentTurn()}`
      return span
  }

  function checkWinner(turn) {
    
    const b = board; 
    const dWin1 = [b[0][0], b[1][1], b[2][2]] 
    const dWin2 = [b[2][0], b[1][1], b[0][2]] 
    const row1 = b[0], row2 = b[1], row3 = b[2]
    const col1 = [b[0][0], b[1][0], b[2][0]] 
    const col2 = [b[0][1], b[1][1], b[2][1]]
    const col3 = [b[0][2], b[1][2], b[2][2]] 
    
    const wins = [dWin1, dWin2, row1, row2, row3, col1, col2, col3]
    let didPlayerWin 
    wins.forEach(win => {
        didPlayerWin
        let ans =  win.every(i => i === turn)
        if (ans === true) {
          didPlayerWin = true
          console.log(`${turn} wins`)
        }
    })
    return didPlayerWin
  }


  function disableMarking() {
    tiles.forEach((tile) => {
      if (tile.hasChildNodes() === false) {
        const span = document.createElement('span')
        tile.appendChild(span)
      }
    })
  }

  function tie() {
    let count = 0
    tiles.forEach(tile => {
      if (tile.hasChildNodes()) {
        count++;
      }
    })
    return count
  }


  return {
    tie,
    initializeBoard,
    placeMark,
    board,
    createElement,
    checkWinner,
    disableMarking
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

  function initialize() {
    currentTurn = 'X'
  }

  return {
    updateTurn,
    getCurrentTurn,
    initialize 
  } 
})();



const announceControl = (() => {

  let display = document.querySelector('.announce-display') 
  function update() {
    display.innerText = `Player ${turnControl.getCurrentTurn()}'s turn`
  }
  function draw() {
    display.innerText = `It's a draw!`
  }
  function initialize() {
    display.innerText = `Player X's turn`
  }

  function win() {
    display.innerText = `${turnControl.getCurrentTurn()} wins!` 
  }

  return {
    update,
    initialize,
    draw,
    win 
  }
})();

// code is pretty spaghetti on this one, but I learned a lot and got good practice in!
// will come back and iterate later!


