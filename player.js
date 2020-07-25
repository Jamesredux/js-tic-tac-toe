// player factory function 


const player = (name, firstMover) => {
    var mark = "X"
    !firstMover ? mark = "O" : mark;

//    this.takeTurn = function(grid, cellCoords) {
//     console.log(grid)
//     grid.boardData[cellCoords[0]][cellCoords[1]] = this.mark;
//    };

   return { name, mark }
};

// return
// getName,
// isMyTurn,
// setMyTurn,
// getCounter,
// isAI,
// getMove


// board self calling module
// so don't have to create more than once - created on load - just reset when needed
// return
// reset,
// getBoardState,
// isValidMove,
// updateBoard,
// getFreeSquares,
// boardInEndState,
// stopInput,
// drawWinningLine,
// startInput

// game is module

