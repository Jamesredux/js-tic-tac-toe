Made as part of the Odin Project

create board
create player

player object, needs attributes - piece, win? turn?

game object - needs players, access to board, win check of board, access to turn

ai player - 

web page - -- board - message 
array board [
    [0,1,2],
    [3,4,5],
    [6,7,5]
] 

divs will represent each square - eg board[0][0], board[0][1], board[0][2] is top row - 
which methods need to be attached to functions, objects, modules etc

start game
whose turn
choose square
is it free
place marker
check win
check stalemate
if either above true - inform players and restart game
change turn / player mark
back to whose turn

one player game
whose turn 
if player get move check free, place marker, check win, check stalemate - change turn
if computer - ai choose square - place marker - check win/stalemate - change turn
ai could check for 'almost wins' to block

to do:
at effect on mouseover square
tie each cell to data -

put modules in self -calling function to set up? the ones that should be set up 
on page load.

player info: - turn - win? - name - mark;

intro 
player vs player 
player vs computer
if one choose name
