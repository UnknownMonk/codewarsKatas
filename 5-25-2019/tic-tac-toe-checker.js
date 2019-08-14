function isSolved(board) {
  const isWinner = (player, set) => set.every(cell => cell === player);

  for (let i = 0; i < 3; i++) {
    const row = board[i];

    if (isWinner(1, row)) {
      return 1;
    } else if (isWinner(2, row)) {
      return 2;
    }

    for (let i = 0; i < 3; i++) {
      const col = [board[0][i], board[1][i], board[2][i]];

      if (isWinner(1, col)) {
        return 1;
      } else if (isWinner(2, col)) {
        return 2;
      }
    }
    const backDiagonal = [board[0][0], board[1][1], board[2][2]];
    if (isWinner(1, backDiagonal)) {
      return 1;
    } else if (isWinner(2, backDiagonal)) {
      return 2;
    }

    const forwardDiagonal = [board[2][0], board[1][1], board[0][2]];
    if (isWinner(1, forwardDiagonal)) {
      return 1;
    } else if (isWinner(2, forwardDiagonal)) {
      return 2;
    }

    if (board.some(row => row.some(cell => cell === 0))) {
      return -1;
    }

    return 0;
  }
}
console.log(isSolved([[0, 0, 0], [0, 0, 0], [1, 1, 1]]), -1);
