const solution = (board, moves) => {
  let answer = 0;
  let pickArray = [];

  for (i = 0; i < moves.length; i++) {
    for (j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        pickArray.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;

        if (
          pickArray[pickArray.length - 1] === pickArray[pickArray.length - 2]
        ) {
          pickArray.splice(pickArray.length - 2, 2);
          answer += 2;
        }

        break;
      }
    }
  }

  return answer;
};