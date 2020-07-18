// var myCoolFunction = (function() {
//    var name = "bob";
//    function sayName() {
//        console.log("hello " + name + " !!!");
//    }

//    function updateBoard(params) {
//        //can contact other modules inside this like so...
//        //player.changeTurn
//        //game.check or whatever
//    }
//    return {
//        // this can be run outside function with myCoolFunction.sayName();
//        sayName
//    }
// })();
const playerCreator = (name, firstMover) => {
    var mark = "X"
   if(!firstMover) {
       mark = "O"
   };

   return { name, mark }
};

//grid module
const grid = (function() {
    function init() {
        setListeners();
    }

    function setListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.addEventListener('click', selectCell));
    }

    function selectCell() {
        // if cell occupied return
       console.log(this.dataset.cell); 
       const cellSelected = this.dataset.cell;
       const cellA = cellSelected[0];
       const cellB = cellSelected[1];
       console.log(cellSelected[1])
       this.textContent = "xor0"; 
       game.boardData[cellA][cellB] = 1;  //create one game.chooseSquare function that goes
       //to game module and changes board, checks win  changes playerturn -
    };

    init();
 }) ();

 //game module
 const game = (function() {

    // have current player variable in game which is either of player objects
     function init() {
         setPlayers();
         setBoardData()
     };

     function setPlayers() {

         this.player1 = playerCreator("Player 1", true)
         this.player2 = playerCreator("Player 2", false)
     };

     
     function setBoardData() {
         this.boardData = [
             [0,0,0],
             [0,0,0],
             [0,0,0]
            ];
            
        };
        
    function toggleTurn() {
   
        };
     init();

     console.log(player1.name)
     return { boardData, player1, init }
     
     
 })();




