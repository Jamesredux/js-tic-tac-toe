// player factory function 


const player = (name, firstMover) => {
    var mark = "X"
    !firstMover ? mark = "O" : mark;


   return { name, mark }
};


