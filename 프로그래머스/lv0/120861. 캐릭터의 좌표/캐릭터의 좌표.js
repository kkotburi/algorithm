const solution = (keyinput, board) => {
  let x = 0;
  let y = 0;

  const maxX = (board[0] - 1) / 2;
  const minX = -((board[0] - 1) / 2);
  const maxY = (board[1] - 1) / 2;
  const minY = -((board[1] - 1) / 2);

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "right":
        x < maxX && x++;
        break;
      case "up":
        y < maxY && y++;
        break;
      case "left":
        x > minX && x--;
        break;
      case "down":
        y > minY && y--;
        break;
    }
  }

  return [x, y];
};