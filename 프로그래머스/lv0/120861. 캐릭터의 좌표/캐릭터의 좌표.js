const solution = (keyinput, board) => {
  let x = 0;
  let y = 0;

  const maxX = (board[0] - 1) / 2;
  const minX = -((board[0] - 1) / 2);
  const maxY = (board[1] - 1) / 2;
  const minY = -((board[1] - 1) / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && x < maxX) {
      x++;
    }
    if (keyinput[i] === "left" && x > minX) {
      x--;
    }
    if (keyinput[i] === "up" && y < maxY) {
      y++;
    }
    if (keyinput[i] === "down" && y > minY) {
      y--;
    }
  }
  return [x, y];
};