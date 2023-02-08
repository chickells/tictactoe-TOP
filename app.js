// fuck all this noise, restarting with WebDevSimplified youtube video
// https://www.youtube.com/watch?v=Y-GkMjUZsmM

const gameBoard = (() => {
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    const WINNING_COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const cellElements = document.querySelectorAll('[data-cell]')
    const board = document.getElementById('board')
    const restartBtn = document.getElementById('restartButton')

    // container for bg popup
    const winningMessageElement = document.getElementById('winningMessage')
    
    // actual text
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

    let circleTurn

    startGame()
       
    function startGame() {
        circleTurn = false
        cellElements.forEach(cell => {
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.addEventListener('click', handleClick, { once: true})
        })
        setBoardHoverClass()
        winningMessageElement.classList.remove('show')
    }
    
    function handleClick(e) {
        // place mark        
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)
        if (checkWin(currentClass)){
            endGame(false)
        } else if (isDraw()) {
            endGame(true)
        } else {
            swapTurns()
            setBoardHoverClass()
        }        
    }

    function placeMark (cell, currentClass) {
        cell.classList.add(currentClass)
    }

    function swapTurns() {
        circleTurn = !circleTurn
      }

    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (circleTurn) {
          board.classList.add(CIRCLE_CLASS)
        } else {
          board.classList.add(X_CLASS)
        }
      }

      // checks if 
      function checkWin(currentClass) {
        return WINNING_COMBOS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
        })
      }

      // checks if every cell contains either class in the class lists, which is an array
      // returns BOOL
      function isDraw() {
        // the [...____] DESTRUCTURES the cellElements into an array,
        // which then can call the '.every' function on it, lfg
        return [...cellElements].every(cell => {
          return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
        })
      }

      // endGame only fired if isDraw or checkWin returns true
      // if Draw, then sets content to draw and shows button
      // if win, displays winner and shows button
      function endGame(draw) {
        if (draw) {
          winningMessageTextElement.innerText = 'Draw!'
        } else {
          winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
        }
        winningMessageElement.classList.add('show')
      }

      restartBtn.addEventListener('click', startGame)

})()


