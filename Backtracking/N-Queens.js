/**
 * @param {number} n
 * @return {string[][]}
 */

const generateBoard = (n, filler) => {
    return Array.from({ length: n }, () =>
      Array.from({ length: n }, () => filler)
    );
  };
  
  const toggle = (x, y, board) => {
    board[x][y] = board[x][y] === 'Q' ? '.' : 'Q';
  };
  
  const canPlace = (x, y, board) => {
    const n = board.length;
  
    // check verticals
    for(let i = 0; i < board.length; i++) {
        if(board[i][y] === 'Q') return false;
    }
  
    // check horiontals
    for(let i = 0; i < board[x].length; i++) {
      if(board[x][i] === 'Q') return false;
    }
  
    // check major diagonals
    let yCheck = y;
  
    if (x > 0) {
      for (let i = x - 1; i >= 0; i--) {
        if (--yCheck >= 0 && board[i][yCheck] === 'Q') return false;
      }
    }
  
    yCheck = y;
  
    if (x < n - 1) {
      for (let i = x + 1; i < n; i++) {
        if (++yCheck < n && board[i][yCheck] === 'Q') return false;
      }
    }
  
    // check minor diagonals
    yCheck = y;
  
    if (x > 0) {
      for (let i = x - 1; i >= 0; i--) {
        if (++yCheck >= 0 && board[i][yCheck] === 'Q') return false;
      }
    }
  
    yCheck = y;
  
    if (x < n - 1) {
      for (let i = x + 1; i < n; i++) {
        if (--yCheck < n && board[i][yCheck] === 'Q') return false;
      }
    }
  
    return true;
  };
  
  const hasQueen = (x, y, board) => board[x][y] === 'Q';
  
  const clone = board => {
    const newBoard = [];
    for(let i = 0; i < board.length; i++) {
      newBoard.push(board[i].join(""))
    }
    return newBoard;
  }
  
  const solveNQueens = n => {
    let solutionCount = 0;
    let solutions = [];
    const board = generateBoard(n, '.');
  
    const inner = (startX = 0, startY = 0, queensCount = 0) => {
      if (queensCount === n) {
        solutionCount += 1;
        solutions.push(clone(board));
        return;
      }
      let startingY = startY;
      for (let x = startX; x < n; x++) {
        for (let y = startingY; y < n; y++) {
          if (!hasQueen(x, y, board) && canPlace(x, y, board)) {
            toggle(x, y, board);
            inner(x + 1, 0, queensCount + 1);
            toggle(x, y, board);
          }
        }
        startingY = 0;
      }
    };
  
    inner();
  
    return solutions;
  };