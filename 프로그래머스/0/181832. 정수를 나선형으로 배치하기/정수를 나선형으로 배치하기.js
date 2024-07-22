const solution = (n) => {
  let move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let answer = Array.from(new Array(n), () => new Array(n).fill(0));
  let x = 0;
  let y = 0;
  let dir = 0;
  let num = 1;
  while (num <= n * n) {
    answer[x][y] = num;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (
      nextX >= n ||
      nextX < 0 ||
      nextY >= n ||
      nextY < 0 ||
      answer[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
    num++;
  }
  return answer;
};