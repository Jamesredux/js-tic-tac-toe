const game = (() => {
    
    const squares = document.querySelectorAll('.cell');
    const infoCard = document.querySelector('.result');
    const startForm = document.querySelector('#player-names');
    const startAIGame = document.querySelector('#play-computer');
    const restartButton = document.querySelector('.restart');
    const restartAIButton = document.querySelector('.restartAI');
    
    let turn = 0;
    let player1;
    let player2;
    let currentPlayer;

    const playGame = (player1Name, player2Name) => {
        console.log("two player game")
      player1 = player(player1Name, true);
      player2 = player(player2Name, false);

      infoCard.innerHTML = '';
      gameBoard.reset();
      squares.forEach(square => square.removeEventListener('click', takeTurnVsAI));
      squares.forEach(square => square.addEventListener('click', takeTurn));
      
      currentPlayer = player1  

    };

    const playComputerGame = (singlePlayerName) => {
        player1 = player(singlePlayerName, true);
        // player2 = computerPlayer()
        infoCard.innerHTML = '';
        gameBoard.reset();
        squares.forEach(square => square.removeEventListener('click', takeTurn));
        squares.forEach(square => square.addEventListener('click', takeTurnVsAI));
        
        turn = 0
        currentPlayer = player1  
    };

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

    function takeTurnVsAI() {
        if (this.textContent != '') return;
        let cellCoords = this.dataset.cell;
        let mark = currentPlayer.mark;
        gameBoard.updateBoard(cellCoords, mark);
        if (gameBoard.checkWin(currentPlayer)) {
            playerBeatsComputer();
            return;
        } else if (gameBoard.checkDraw()) {
            gameDrawnAI();
            return;
        } else {
            currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
        };
        gameBoard.computerTurn(currentPlayer);
        if (gameBoard.checkWin(currentPlayer)) {
            computerBeatsPlayer();
            return;
        } else if (gameBoard.checkDraw()) {
            gameDrawnAI();
            return;
        } else {
            currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
        };

    };

    const gameWon = () => {

        infoCard.innerHTML = currentPlayer.name + ' is the winner.';
        freezeBoard(takeTurn);
        addRestartButton();
    };

    const playerBeatsComputer = () => {
        infoCard.innerHTML = currentPlayer.name + ' beat the computer.';
        freezeBoard(takeTurnVsAI);
        addRestartAIGame();
        
    };

    const computerBeatsPlayer = () => {
        infoCard.innerHTML = 'The Computer has defeated you!';
        freezeBoard(takeTurnVsAI);
        addRestartAIGame();
    }

    const gameDrawnAI = () => {
        infoCard.innerHTML = 'It\'s a Tie!';
        addRestartAIGame();
    }

    const freezeBoard = (method) => {
        squares.forEach(square => square.removeEventListener('click', method));
        
    }

    const gameDrawn = () => {
        infoCard.innerHTML = 'It\'s a Tie!';
        addRestartButton();
    };

    const addRestartButton = () => {     
        restartButton.style.display = 'block';
    };

    const addRestartAIGame = () => {
        restartAIButton.style.display = 'block';
    }
    
    
    
    startForm.addEventListener('submit', function(e) {
        e.preventDefault()
        let player1Name = this.querySelector('#player1').value || 'Player 1';
        let player2Name = this.querySelector('#player2').value || 'Player 2';
        this.reset();
        playGame(player1Name, player2Name);

     });

     startAIGame.addEventListener('submit', function(e) {
        e.preventDefault();
        let singlePlayerName = this.querySelector('#singlePlayer').value || 'You';
        this.reset();
        playComputerGame(singlePlayerName);
     });

     restartButton.addEventListener('click', function(e) {
        e.preventDefault();
        playGame(player1.name, player2.name);

     });

     restartAIButton.addEventListener('click', function(e) {
         e.preventDefault();
         playComputerGame(player1.name);
     })

     window.onload = function() {
         playGame('Player 1', 'Player 2');
     }


     return {
         currentPlayer
     }

})();