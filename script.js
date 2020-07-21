const board = () => {
    this.cells = Array.from(document.querySelectorAll('.cell'));

    this.boardData = [
     ['','',''], 
     ['','',''],   
     ['','','']
    //  [0,0,0],
    //  [0,0,0],
    //  [0,0,0]
    ];


    this.checkForWin = function(currentPlayer) {
        
      const winningLines = [
        boardData[0],
        boardData[1],
        boardData[2],
        [boardData[0][0],boardData[1][0],boardData[2][0]],
        [boardData[0][1],boardData[1][1],boardData[2][1]],
        [boardData[0][2],boardData[1][2],boardData[2][2]],
        [boardData[0][0],boardData[1][1],boardData[2][2]],
        [boardData[0][2],boardData[1][1],boardData[2][0]]
      ];
      winningLines.forEach(combo => {
        if (combo.every(mark => mark == currentPlayer.mark)) {
            console.log("winner!!!")
        };
      });
     
       // newGame.restart();        
    };
    
 return { cells, boardData, checkForWin, winningLines }
    
};

const player = (name, firstMover) => {
    var mark = "X"
   if(!firstMover) {
       mark = "O"
   };

   this.takeTurn = function(grid, cellCoords) {
    console.log(grid.boardData)
    console.log(this.name)
    grid.boardData[cellCoords[0]][cellCoords[1]] = this.mark;
    // check winner here

   };

   return { name, mark, takeTurn }
};

function game() {
    const grid = board();
    const player1 = player("Player 1", true);
    const player2 = player("Player 2", false);
    var currentPlayer = player1;
    

    this.start = function() {
        grid.cells.forEach(cell => cell.addEventListener('click', takeTurn))
    };

    function takeTurn() {
        cellCoords = this.dataset.cell;
        currentPlayer.takeTurn(grid, cellCoords);
        this.textContent = currentPlayer.mark
        grid.checkForWin(currentPlayer);
        
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
        console.log(grid.boardData);
        const cellDiv = document.querySelector("[data-cell=" + CSS.escape(cellCoords) + "]")
         cellDiv.removeEventListener('click', takeTurn);
         
    };

    this.restart = function() {
        console.log("restart")
    }
  

};
const newGame = new game();
newGame.start();




