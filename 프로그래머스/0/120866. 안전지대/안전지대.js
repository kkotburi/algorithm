const solution = (board) => {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        !board[i - 1]?.[j - 1] &&
        !board[i - 1]?.[j] &&
        !board[i - 1]?.[j + 1] &&
        !board[i][j - 1] &&
        !board[i][j] &&
        !board[i][j + 1] &&
        !board[i + 1]?.[j - 1] &&
        !board[i + 1]?.[j] &&
        !board[i + 1]?.[j + 1]
      ) {
        answer++;
      }
    }
  }
  return answer;
};