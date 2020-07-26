const gameBoard = (() => {
    let gameOver = false;
    const displayCells = document.querySelectorAll('.cell');
    const restartSection = document.querySelectorAll(`[class^='restart']`);
    
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

      displayCells.forEach(cell => cell.classList.remove('winsquare'));
      displayCells.forEach(cell => cell.textContent = '');
      restartSection.forEach(button => button.style.display = 'none');

      gameOver = false;
    };

    const updateBoard = (coords, playerMark) => {

        boardData[coords[0]][coords[1]] = playerMark;
        
        let cellDiv = document.querySelector("[data-cell=" + CSS.escape(coords) + "]");
        cellDiv.textContent = playerMark;
    };


    const computerTurn = (currentPlayer) => {
        let oppositionMark = currentPlayer.mark === "X" ? "O" : "X";
        let moved = false;

        for(i = 0; i < winningLines.length; i++) {
            let line = winningLines[i];    
            let lineData = [boardData[line[0]][line[1]], 
                            boardData[line[2]][line[3]],
                            boardData[line[4]][line[5]]
                        ];

            let oppoTotal = lineData.filter(x => x == oppositionMark).length;
            let compTotal = lineData.filter(x => x == currentPlayer.mark).length;
            
            // check if possible winning move for computer the block opposition win
            if (compTotal == 2 && lineData.includes('')) {
                smartMove(currentPlayer, line);
                moved = true;
                break
            } else if (oppoTotal == 2 && lineData.includes('')) {
                 smartMove(currentPlayer, line);
                 moved = true;
                 break; 
            } ;   
        };
        // if no winning move or blocking move just picks first free square
      if (moved == false) anyFreeSquare(currentPlayer);
      
    };

    const anyFreeSquare = (currentPlayer) => {
        for(i = 0; i < 3; i++) {
            
            for(j = 0; j < 3; j++) {

                if(boardData[i][j] === '') {
                    boardData[i][j] = currentPlayer.mark;
                    let compcoords = '' + [i] + [j];
                    let computerChoice = document.querySelector
                    ("[data-cell=" + CSS.escape(compcoords) + "]");
                    computerChoice.textContent = currentPlayer.mark;
                    return;
                };
              
            };
        };
    };

    const smartMove = (currentPlayer, line) => {
        let a = 0;
        let b = 1;

        for(i = 0; i < 3; i++) {
            if(boardData[line[a]][line[b]] == '') {
                boardData[line[a]][line[b]] = currentPlayer.mark;
                    let compcoords = '' + line[a] + line[b];
                    let computerChoice = document.querySelector
                    ("[data-cell=" + CSS.escape(compcoords) + "]");
                    computerChoice.textContent = currentPlayer.mark;
                    return;

            } else {
                a += 2;
                b += 2;
            }
        }
    }; 



    //random pick i 0 - 2
    //pick j 0 - 2
    // if square free fill square 
    // else run program again
    // should stop this running for ever
    // count if it has tried 100 times give up


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
      checkDraw,
      computerTurn


    };
  })();


 