// // board object

// const board = () => {

//     var gameOver = false;
//     var gameDrawn = false;
//     var winningLines = [];
//     this.cells = Array.from(document.querySelectorAll('.cell'));
//     function init() {  
//       this.boardData = [
//      ['','',''], 
//      ['','',''],   
//      ['','','']
//     ];
//     };

//     this.resetBoard = function() {
//         this.boardData = [
//             ['','',''], 
//             ['','',''],   
//             ['','','']
//            ];
//            console.log(this.boardData)
//     };

//     this.checkForWin = function(currentPlayer) {
//        console.log("check for win called")
//        console.log(boardData[0])
//        console.log(this.boardData[0])
//          winningLines = [
//             this.boardData[2],
//             this.boardData[0],
//             this.boardData[1],
//             [this.boardData[0][1],this.boardData[1][1],this.boardData[2][1]],
//             [this.boardData[0][0],this.boardData[1][0],this.boardData[2][0]],
//             [this.boardData[0][2],this.boardData[1][2],this.boardData[2][2]],
//             [this.boardData[0][0],this.boardData[1][1],this.boardData[2][2]],
//             [this.boardData[0][2],this.boardData[1][1],this.boardData[2][0]]
//           ];
//         //   console.log(winningLines)
//       winningLines.forEach(combo => {
        
//         if (combo.every(mark => mark == currentPlayer.mark)) {
//             // console.log(combo)
//             gameOver = true;
//         };
//       });
//       return gameOver;
//     };
    
//     this.checkForDraw = function() {
//         const flattened = [].concat(...this.boardData);
//         if ( !flattened.some(x => x === '')) {
//             gameDrawn = true;
//         };
        
//         return gameDrawn;
//     };
    
//     init();
//     return { cells, boardData, checkForWin, checkForDraw, resetBoard }

// };


// // player object 

// const player = (name, firstMover) => {
//     var mark = "X"
//     !firstMover ? mark = "O" : mark;

//    this.takeTurn = function(grid, cellCoords) {
//     console.log(grid)
//     grid.boardData[cellCoords[0]][cellCoords[1]] = this.mark;
//    };

//    return { name, mark, takeTurn }
// };


// // game function 

// const game = (player1name="Player 1", player2name="Player 2") => {
//     const grid = board();
//     const infoCard = document.querySelector('.result');
//     const player1 = player(player1name, true);
//     const player2 = player(player2name, false);
//     var currentPlayer = player1;
    
//     this.start = function() {
        
//         // console.log("start called")
//         // setUpCells();
       
//          startGame();
//     };

//     function takeTurn(e) {
//         if (this.textContent != '') return;
        
//         cellCoords = this.dataset.cell;
//         // currentPlayer.takeTurn(grid, cellCoords);
//         upDateBoard(cellCoords);
//         this.textContent = currentPlayer.mark

//         if (grid.checkForWin(currentPlayer)) {
//             gameOver();
//         } else if (grid.checkForDraw()) {
//             drawGame();
//         }   
//             else {
//             currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
//             // const cellDiv = document.querySelector("[data-cell=" + CSS.escape(cellCoords) + "]")
//             // cellDiv.removeEventListener('click', takeTurn);            
//         };
//         e.preventDefault();
//         e.stopPropagation();

//     };    

//     function upDateBoard(coords) {
//         grid.boardData[cellCoords[0]][cellCoords[1]] = currentPlayer.mark;
//     };
        
//     function gameOver() {
//         grid.cells.forEach(cell => cell.removeEventListener('click', takeTurn))
//         infoCard.innerHTML = currentPlayer.name + " is the winner";
//         addRestartButton()
//     };
        
//     function drawGame() {
//       infoCard.innerHTML = "Game Drawn"
//       addRestartButton();
//     };
        
//     function addRestartButton() {
//         restartButton = document.querySelector('.restart');
//         restartButton.style.display = 'block';
//         restartButton.addEventListener('click', startGame);
//     };    
    
//     function startGame() {
//       currentPlayer = player1;
//       grid.resetBoard();
//       resetBoard(); 
//     };
    
//     function resetBoard() {
//         // grid = board();
//         // grid.boardData = [
//         //     ['','',''], 
//         //     ['','',''],   
//         //     ['','','']
//         //    ];
//          console.log(grid)   
//         setUpCells();
              
//     };

//     function setUpCells() {
//         // console.log(grid)
//         // gridCells = Array.from(document.querySelectorAll('.cell'));
        
//          infoCard.innerHTML = ''
//         //  grid.cells.forEach(cell => cell.removeEventListener('click', takeTurn))
//          grid.cells.forEach(cell => 
//             {
//                 // console.log("removing listener")
//                 // console.log(cell)
//                 cell.removeEventListener('click', takeTurn);
//             })
        
//          grid.cells.forEach(cell => cell.innerHTML = '');
//          grid.cells.forEach(cell => 
//             {
//                 // console.log(cell)
//                 // console.log("adding listener")
//                 cell.addEventListener('click', takeTurn);
//             });
//      };
    
//      return { start, resetBoard }

// };


// const welcome = (function()  {

//     const init = () => {
//          addListeners()
 
//      };
//      const addListeners = () => {
//         const getNames = document.querySelector('#player-names');
//         //  const onePlayer = document.querySelector('.vs-computer');
         
 
//          getNames.addEventListener('submit', startTwoPlayerGame);
//         //  onePlayer.addEventListener('click', startOnePlayerGame);
//      };
 
//     //  function selectTwoPlayerGame() {
//     //      const welcomeBox = document.querySelector('.welcome-inner');
//     //      const nameSelector = document.querySelector('.player-name-input')
//     //      welcomeBox.style.transform = "rotateY(180deg)";
//     //      nameSelector.addEventListener('submit', startTwoPlayerGame)
//     //  };
 
//      function startTwoPlayerGame(e) {
//          e.preventDefault();

//          const player1Name = this.querySelector('#player1').value || 'Player 1';
//          const player2Name = this.querySelector('#player2').value || 'Player 2';
 
//          this.reset();

//          if ((typeof newNamedGame) === 'object') {
//          console.log("recycling game")
//          newNamedGame.start();
//         } else {
//            const newNamedGame = game(player1Name, player2Name);

//            newNamedGame.start();    
//        };
           
//      };
//      init();
 
//  })();


// // const newGame = new game();
// // newGame.start();

