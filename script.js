// board object

const board = () => {
    console.log("new board")
    var gameOver = false;
    var gameDrawn = false;
    this.cells = Array.from(document.querySelectorAll('.cell'));

    this.boardData = [
     ['','',''], 
     ['','',''],   
     ['','','']
    ];

    this.reset = function() {
        this.boardData = [
            ['','',''], 
            ['','',''],   
            ['','','']
           ];
    }

    this.checkForWin = function(currentPlayer) {
       

        const winningLines = [
            this.boardData[2],
            this.boardData[0],
            this.boardData[1],
            [this.boardData[0][1],this.boardData[1][1],this.boardData[2][1]],
            [this.boardData[0][0],this.boardData[1][0],this.boardData[2][0]],
            [this.boardData[0][2],this.boardData[1][2],this.boardData[2][2]],
            [this.boardData[0][0],this.boardData[1][1],this.boardData[2][2]],
            [this.boardData[0][2],this.boardData[1][1],this.boardData[2][0]]
          ];

      winningLines.forEach(combo => {

        if (combo.every(mark => mark == currentPlayer.mark)) {
            gameOver = true;
            console.log("winning lines game over");
            
        };
      });
        return gameOver;
    };

    this.checkForDraw = function() {
        const flattened = [].concat(...this.boardData);
        console.log(flattened)
       if ( !flattened.some(x => x === '')) {
        gameDrawn = true;}
        console.log("drawn");
        return gameDrawn;
    }
    
 return { cells, boardData, checkForWin, checkForDraw, reset }

};


// player object 

const player = (name, firstMover) => {
    var mark = "X"
   if(!firstMover) {
       mark = "O"
   };

   this.takeTurn = function(grid, cellCoords) {
       console.log(grid.boardData)
    grid.boardData[cellCoords[0]][cellCoords[1]] = this.mark;
   };

   return { name, mark, takeTurn }
};


// game function 

function game() {
    var grid = board();
    const player1 = player("Player 1", true);
    const player2 = player("Player 2", false);
    const infoCard = document.querySelector('.result');
    var currentPlayer = player1;
    
    this.start = function() {
        infoCard.innerHTML = ''
        grid.cells.forEach(cell => cell.innerHTML = '');
        grid.cells.forEach(cell => cell.addEventListener('click', takeTurn))
    };

    function takeTurn() {
        cellCoords = this.dataset.cell;
        currentPlayer.takeTurn(grid, cellCoords);
        this.textContent = currentPlayer.mark
        // console.log(grid.boardData)
        if (grid.checkForWin(currentPlayer)) {
            
            gameOver();
        } else if (grid.checkForDraw()) {
            
            drawGame();
        }   
            else {
            currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
            const cellDiv = document.querySelector("[data-cell=" + CSS.escape(cellCoords) + "]")
            cellDiv.removeEventListener('click', takeTurn);            
        };
        
        function gameOver() {
            
            infoCard.innerHTML = currentPlayer.name + " is the winner";
            grid.cells.forEach(cell => cell.removeEventListener('click', takeTurn))
            restartButton = document.querySelector('.restart');
            restartButton.style.display = 'block';
            restartButton.addEventListener('click', restartGame);

        };

        function drawGame() {
            infoCard.innerHTML = "Game Drawn"
            restartButton = document.querySelector('.restart');
            restartButton.style.display = 'block';
            restartButton.addEventListener('click', restartGame);
        }

        function restartGame() {
            currentPlayer = player1;
            infoCard.innerHTML = ''
            resetBoard();
            
        }

        function resetBoard() {
            grid = board();
            grid.boardData = [
                ['','',''], 
                ['','',''],   
                ['','','']
               ];
               
            // grid.reset()
            
            grid.cells.forEach(cell => cell.addEventListener('click', takeTurn))
            grid.cells.forEach(cell => cell.innerHTML = '');
            
        }
        
        
         
    };



};

const newGame = new game();
newGame.start();



function setUpGame() {
    const getNames = document.querySelector('#player-names');
    getNames.addEventListener('submit', startGame);

    function startGame(e) {
        const player1 = 
        e.preventDefault();
        console.log(e);
        const new2PlayerGame = new game();
        new2PlayerGame.start();
    }
};

setUpGame();
