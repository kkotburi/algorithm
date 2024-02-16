const solution = (board, k) => {
  let answer = 0;
  for (let i = 0; i <= k && i < board.length; i++) {
    for (let j = 0; j <= k - i && j < board[i].length; j++) {
      answer += board[i][j];
    }
  }
  return answer;
};
