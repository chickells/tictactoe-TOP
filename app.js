let gameBoard = (() => {

    // initialize players
    const playerInitializer = (name, symbol, isAI, turn) => {
        return { name, symbol, isAI, turn }
    };

    const player1 = playerInitializer ('player 1', 'X', false, true);
    const player2 = playerInitializer ('player 2', 'O', false, false);

    // possible win combos
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];

    let winner = null;

    let turns = 0;

    let board = [];

    let 

























})();