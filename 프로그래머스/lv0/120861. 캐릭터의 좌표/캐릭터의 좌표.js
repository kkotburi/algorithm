const solution = (keyinput, board) => {
  let x = 0;
  let y = 0;

  const boardX = (board[0] - 1) / 2;
  const boardY = (board[1] - 1) / 2;

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "right":
        x < boardX && x++;
        break;
      case "up":
        y < boardY && y++;
        break;
      case "left":
        x > -boardX && x--;
        break;
      case "down":
        y > -boardY && y--;
        break;
    }
  }

  return [x, y];
};