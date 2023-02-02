let gameBoard = (() => {

    // initialize players
    const playerInitializer = (name, symbol, isAI, turn) => {
        return { name, symbol, isAI, turn }
    };

    const player1 = playerInitializer ('player 1', 'X', false, true);
    const player2 = playerInitializer ('player 2', 'O', false, false);

    

    // let winner = null;

    // let turns = 0;

    // let board = [];

    const cells = document.querySelectorAll('.cell');
    const statusText = document.querySelector('#statusText');
    const restartBtn = document.querySelector('#restartBtn');

    // possible win combos
    const winConditions = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];

    let options = ["", "", "", "", "", "", "", "", ""];

    let currentPlayer = "X";
    let running = false;

    initializeGame();

    function initializeGame() {
        cells.forEach(cell => addEventListener('click', cellClicked()))
        restartBtn.addEventListener('click', restartGame);
        statusText.textContent = `${currentPlayer}'s turn:`;
        running = true;
    }

///// 2/2/23 7:39a update
// THE 'THIS' ISN'T WORKING, IT CALLS 'WINDOW' AND NOT THE CURRENT CELL
// DUMB
// TRYING ALL SORTS OF WEIRD ISH TO FIX IT
// BUT HEY I THINK THIS IS FASTER FEEDBACK LOOP AND ITERATIONS THAN C++
// BECAUSE FUCK COMPILING TIME :)

    function cellClicked() {
        // what should happen here?
        // it should set text content to current player/current player mark
        // it should change turn
        // it should check winConditions
        // it should keep track of total turns and check if tie

        // their solution does this:
        // set cellIndex to the value of this.cellIndex
        // then checks if spot has already been clicked/if game isn't running, returns nothing
        // const cellIndex = this.getAttribute('cellIndex')
        console.log(this);

        // https://www.youtube.com/watch?v=AnmwHjpEhtA


        // then calls updateCell(this, cellIndex), which finds this cell
        // and updates text content to player mark, then updates
        // options by assigning the index from this.cellIndex

        // then changes player and updates statusText
        
        // then checks winner
        // does a for loop for i < winConditions.length
        // assigns array to 

    }

    function restartGame () {
        console.log('restart fired');
    }    



    /////////////////////////////////////////////////////
    //////// SOLUTION ///////////////////////////////////
    /////////////////////////////////////////////////////

    // function cellClicked(){
    //     const cellIndex = this.getAttribute("cellIndex");
    
    //     if(options[cellIndex] != "" || !running){
    //         return;
    //     }
    
    //     updateCell(this, cellIndex);
    //     checkWinner();
    // }
    // function updateCell(cell, index){
    //     options[index] = currentPlayer;
    //     cell.textContent = currentPlayer;
    // }
    // function changePlayer(){
    //     currentPlayer = (currentPlayer == "X") ? "O" : "X";
    //     statusText.textContent = `${currentPlayer}'s turn`;
    // }
    // function checkWinner(){
    //     let roundWon = false;
    
    //     for(let i = 0; i < winConditions.length; i++){
    //         const condition = winConditions[i];
    //         const cellA = options[condition[0]];
    //         const cellB = options[condition[1]];
    //         const cellC = options[condition[2]];
    
    //         if(cellA == "" || cellB == "" || cellC == ""){
    //             continue;
    //         }
    //         if(cellA == cellB && cellB == cellC){
    //             roundWon = true;
    //             break;
    //         }
    //     }
    
    //     if(roundWon){
    //         statusText.textContent = `${currentPlayer} wins!`;
    //         running = false;
    //     }
    //     else if(!options.includes("")){
    //         statusText.textContent = `Draw!`;
    //         running = false;
    //     }
    //     else{
    //         changePlayer();
    //     }
    // }
    // function restartGame(){
    //     currentPlayer = "X";
    //     options = ["", "", "", "", "", "", "", "", ""];
    //     statusText.textContent = `${currentPlayer}'s turn`;
    //     cells.forEach(cell => cell.textContent = "");
    //     running = true;
    // }
    
    





















})();