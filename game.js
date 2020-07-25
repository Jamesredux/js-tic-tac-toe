const game = (() => {
    
    const squares = document.querySelectorAll('.cell');
    const infoCard = document.querySelector('.result');
    const startForm = document.querySelector('#player-names');
    const restartButton = document.querySelector('.restart');
    
    let player1;
    let player2;
    let currentPlayer;

    const playGame = (player1Name, player2Name) => {

      player1 = player(player1Name, true);
      player2 = player(player2Name, false);

      infoCard.innerHTML = '';
      gameBoard.reset();

      squares.forEach(square => square.addEventListener('click', takeTurn));
      
      currentPlayer = player1  

    }

    function takeTurn() {
        if (this.textContent != '') return;
        let cellCoords = this.dataset.cell;
        let mark = currentPlayer.mark;
        gameBoard.updateBoard(cellCoords, mark);
        if (gameBoard.checkWin(currentPlayer)) {
            gameWon();
        } else if (gameBoard.checkDraw()) {
            gameDrawn();
        } else {
            currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
        };
    };

    const gameWon = () => {

        infoCard.innerHTML = currentPlayer.name + ' is the winner.';
        squares.forEach(square => square.removeEventListener('click', takeTurn));
        addRestartButton();

    };

    const gameDrawn = () => {
        infoCard.innerHTML = 'It\'s a Tie!';
        addRestartButton();
    };

    const addRestartButton = () => {     
        restartButton.style.display = 'block';
    };
    
    
    
    startForm.addEventListener('submit', function(e) {
        e.preventDefault()
        let player1Name = this.querySelector('#player1').value || 'Player 1';
        let player2Name = this.querySelector('#player2').value || 'Player 2';
        this.reset();
        playGame(player1Name, player2Name)

     });

     restartButton.addEventListener('click', function(e) {
        e.preventDefault();
        playGame(player1.name, player2.name);

     });

     window.onload = function() {
         playGame('Player 1', 'Player 2');
     }


     return {
         currentPlayer
     }

})();