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

function gameOfLife(grid){
    let newState = [...grid];
    let foo = [];
    let columns = [];
    for(let j in grid) {
        foo = [];
        for(let i in grid){
            foo.push(grid[i][j]);
        }
        columns.push(foo);
    }
    console.log(columns);
    let rowCount = 0;
    let colCount = 0;
    let neighbours = 0;

    console.log(grid);


    for(let row in grid){
        rowCount++;
        row = Number(row);

        for(let cell in grid[row]){
            cell = Number(cell);
            console.log(cell)
            colCount++;
            let current = grid[row][cell];
            console.log(current);

            let rPrev = grid[row][cell-1];
            let rNext = grid[row][cell+1];
            console.log(rPrev);
            console.log(rNext);

            let cPrev = columns[row][cell-1];
            let cNext = columns[row][cell+1];
            console.log(cPrev);
            console.log(cNext);
            
            
            if(current === 1){
                
                if(rPrev === 1) neighbours++;
                if(rNext === 1) neighbours++;

                if(cPrev === 1) neighbours++;
                if(cNext === 1) neighbours++;
                console.log(cNext);
                
                console.log(neighbours);
                
            }
            // if(neighbours < 3 || neighbours > 3){
            //     newState[row][cell] = 0;
            // }
            neighbours = 0;
        }
        colCount = 0;
    }
    console.log(grid)   ;
    console.log(columns);
}

let result = gameOfLife([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
]);

// let result = gameOfLife([
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0],
//     [1, 0, 0, 1, 1, 1, 1],
//     [0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ]);


/*
function conway(board) {
    var neighbours = 0;
    var str = "";
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
           
            if (i === 0 && j === 0) {
                neighbours = board[i][j + 1]
                    + board[i + 1][j + 1]
                    + board[i + 1][j];
            }
           
            else if (i === 0 && j === board[i].length - 1) {
                neighbours = board[i + 1][j]
                    + board[i + 1][j - 1]
                    + board[i][j - 1];
            }
           
            else if (i === board.length - 1 && j === board[i].length - 1) {
                neighbours = board[i - 1][j]
                    + board[i][j - 1]
                    + board[i - 1][j - 1];
            }
           
            else if (i === board.length - 1 && j === 0) {
                neighbours = board[i - 1][j]
                    + board[i - 1][j + 1]
                    + board[i][j + 1];
            }
           
            else if (i === 0 && j > 0 && j < board[i].length - 1) {
                neighbours = board[i][j + 1]
                    + board[i + 1][j + 1]
                    + board[i + 1][j]
                    + board[i + 1][j - 1]
                    + board[i][j - 1];
            }
           
            else if (i > 0 && i < board.length - 1 && j === board[i].length - 1) {
                neighbours = board[i - 1][j]
                    + board[i + 1][j]
                    + board[i + 1][j - 1]
                    + board[i][j - 1]
                    + board[i - 1][j - 1];
            }
           
            else if (i === board.length - 1 && j > 0 && j < board[i].length - 1) {
                neighbours = board[i - 1][j]
                    + board[i - 1][j + 1]
                    + board[i][j + 1]
                    + board[i][j - 1]
                    + board[i - 1][j - 1];
            }
           
            else if (i > 0 && i < board.length - 1 && j === 0) {
                neighbours = board[i - 1][j]
                    + board[i - 1][j + 1]
                    + board[i][j + 1]
                    + board[i + 1][j + 1]
                    + board[i + 1][j];
            }
           
            else {
                neighbours = board[i - 1][j]
                    + board[i - 1][j + 1]
                    + board[i][j + 1]
                    + board[i + 1][j + 1]
                    + board[i + 1][j]
                    + board[i + 1][j - 1]
                    + board[i][j - 1]
                    + board[i - 1][j - 1];
            }
            if (board[i][j] === 1 && neighbours === 2 || board[i][j] === 1 && neighbours === 3) {
                str += "$";
            } else if (board[i][j] === 0 && neighbours === 3) {
                str += "$";
            } else {
                str += "?";
            }
            neighbours = 0;
        }
        str += "\n";
    }
    return str.slice(0, str.length - 1);
}
*/