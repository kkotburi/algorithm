const solution = (n) => {
  let answer = Array.from(new Array(n), () => new Array(n).fill(0));
  let move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let col = 0;
  let row = 0;
  let dir = 0;
  let num = 1;

  while (num <= n * n) {
    answer[col][row] = num;
    let x = col + move[dir][0];
    let y = row + move[dir][1];
    if (x >= n || x < 0 || y >= n || y < 0 || answer[x][y]) {
      dir = (dir + 1) % 4;
    }
    col += move[dir][0];
    row += move[dir][1];
    num++;
  }

  return answer;
};