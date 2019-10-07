function SudokuSolver(grid) {
    // Print unsolved grid
    printGrid(grid)
    // Find first empty cell and start algo there
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] === '.') {
                solveBoard(grid, i, j)
            }
        }
    }
    // print solved grid
    printGrid(grid)
}

function solveBoard(grid, row, col) {
    // if all board completed, sudoku solved
    if (row === 9) {
        return true
    }
    // if current position is not empty, search for next one
    if (grid[row][col] !== '.') {
        if (col === 8) {
            return solveBoard(grid, row+1, 0)
        }
        else {
            return solveBoard(grid, row, col+1)
        }
    }
    else {
        // Check every possibility for this position
        for (let n = 1; n <= 9; n++) {
            grid[row][col] = '' + n
            // Check if this number is valid here
            if (isValid(grid, row, col)) {
                // if it is, then solve next empty cell
                if (col === 8) {
                    if (solveBoard(grid, row+1, 0)) {
                        return true
                    }
                }
                else {
                    if (solveBoard(grid, row, col+1)) {
                        return true
                    }
                }
            }
        }
        // if no number suitable here, then we need to backtrack
        grid[row][col] = '.'
        return false
    }

}

// Check if number at current position is valid
function isValid(grid, row, col) {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (row === 0 && col === 5) {
        }
        if (i !== row && grid[i][col] === grid[row][col]) {
            return false
        }
    }
    // Check columns
    for (let i = 0; i < 9; i++) {
        if (i !== col && grid[row][i] === grid[row][col]) {
            return false
        }
    }
    // Check the box
    let bigrow = Math.floor(row / 3), bigcol = Math.floor(col / 3)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ((i + bigrow*3 !== row) && (j + bigcol*3 !== col) && grid[i + bigrow*3][j + bigcol*3] === grid[row][col]) {
                return false
            }
        }
    }
    return true
}


// Utility function o print the formatted grid
function printGrid(grid) {
    let output = ""
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            output += grid[i][j] + " "
        }
        output += "\n"
    }
    console.log(output)
}


// Solve this case
let grid = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
SudokuSolver(grid)
