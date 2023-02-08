// fuck all this noise, restarting with WebDevSimplified youtube video
// https://www.youtube.com/watch?v=Y-GkMjUZsmM

const gameBoard = (() => {
    const cellElements = document.querySelectorAll('[data-cell]')
    
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
    })
    
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    let circleTurn
    let currentTurn

    function handleClick(e) {
        // place mark
        // this.textContent = currentTurn
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass) 
        swapTurns(currentTurn)
        
        // check for win
        //check if array matches possible winning outcomes manually
        // or maybe there's a more efficient way to do this

        // check for draw
        // if none of the winning sets are met AND if turn count hits 9,
        // then return DRAW

        // switch turns
        // keep a rolling variable currentTurn

        // console.log(`Current turn is ${currentTurn}`);

        // if (currentTurn = 'X') {
        //     currentTurn = 'O'
        // } else {
        //     currentTurn = 'X'
        // }

        // // currentTurn == 'X' ? currentTurn == 'O' : currentTurn == 'X'
        // console.log(`Now it's ${currentTurn}'s turn`);

    }

    function placeMark (cell, currentClass) {
        cell.classList.add(currentClass)
    }

    function swapTurns () {
        // switch turns
        // keep a rolling variable currentTurn

        // YT vid declares turn with CSS styling, making shapes
        // with css classes
        // so he has swapTurns just toggling Circle Class
        circleTurn != circleTurn
    }

    //     console.log(`Current turn is ${currentTurn}`);

    //     if (currentTurn = 'X') {
    //         currentTurn = 'O'
    //     } else {
    //         currentTurn = 'X'
    //     } currentTurn

    //     // currentTurn == 'X' ? currentTurn == 'O' : currentTurn == 'X'
    //     console.log(`Now it's ${currentTurn}'s turn`);
    // }
})()


