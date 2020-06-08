'use strict';

// The goal of this challenge is to implement the logic used in 
// Conway's Game of Life. Wikipedia will give a better 
// understanding of what it is and how it works.

// For a space that's "populated":
//  Each cell with 0 or 1 neighbours dies, as if by solitude.
//  Each cell with 2 or 3 neighbours survives.
//  Each cell with 4 or more neighbours dies, as if by overpopulation.

// Game parameters is an 2-dimensional array of values 0 to 1 "board":
//  0 means the cell is empty.
//  1 means the cell is populated.

// Return a string containing the board's state after the game 
// logic has been applied once. The string should be divided by 
// newlines to signal the end of each row.

function gameOfLife(game){
    
}

let result = gameOfLife([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]);