const gameBoard = (() => {
    let gameOver = false;
    const displayCells = document.querySelectorAll('.cell');
    
    //these are arrays of the array address of all possible winning lines
    //eg: first one is first row -- boardData[0][0] boardData[0][1] boardData[0][2]
    const winningLines = [
        [0,0,0,1,0,2],
        [1,0,1,1,1,2],
        [2,0,2,1,2,2],
        [0,0,1,0,2,0],
        [0,1,1,1,2,1],
        [0,2,1,2,2,2],
        [0,0,1,1,2,2],
        [0,2,1,1,2,0]                    
    ];

    const boardData =  [
        ['','',''], 
        ['','',''],   
        ['','','']
    ];

    const getBoardState = () => boardData;
      

    const reset = () => {

        for(i = 0; i < 3; i++) {
            
            for(j = 0; j < 3; j++) {
                boardData[i][j] = '';
            };
        };

      displayCells.forEach(cell => cell.removeEventListener('click', game.takeTurn));
      displayCells.forEach(cell => cell.classList.remove('winsquare'));
      displayCells.forEach(cell => cell.textContent = '');

      gameOver = false;
    };

    const updateBoard = (coords, playerMark) => {

        boardData[coords[0]][coords[1]] = playerMark;
        
        let cellDiv = document.querySelector("[data-cell=" + CSS.escape(coords) + "]");
        cellDiv.textContent = playerMark;
    };

    const checkWin = (currentPlayer) => {
        winningLines.forEach(line => {
            let lineData = [boardData[line[0]][line[1]], 
                            boardData[line[2]][line[3]],
                            boardData[line[4]][line[5]]
                        ];
            if (lineData.every(mark => mark === currentPlayer.mark)) {
                addLineHighlight(line);
               gameOver = true;   
            };            
        });
        return gameOver;
    };

    const addLineHighlight = (line) => {

        squareOneData = '' + line[0] + line[1];
        squareTwoData = '' + line[2] + line[3];
        squareThreeData = '' + line[4] + line[5];
     
        const squareOne = document.querySelector("[data-cell=" + CSS.escape(squareOneData) + "]");
        const squareTwo = document.querySelector("[data-cell=" + CSS.escape(squareTwoData) + "]");
        const squareThree = document.querySelector("[data-cell=" + CSS.escape(squareThreeData) + "]");
        [squareOne, squareTwo, squareThree].forEach(square => square.classList.add("winsquare"));
    };

    const checkDraw = () => {
       const flattened = [].concat(...boardData);
            
       if ( !flattened.some(x => x === '')) {
            return true;
        };
    };




    return {
      getBoardState,
      reset,
      updateBoard,
      checkWin,
      checkDraw

    };
  })();


 