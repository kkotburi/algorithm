const solution = (numbers, hand) => {
  let answer = "";

  const grid = [
    [0, -2],
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, -2],
    [1, -2],
  ];
  let L = 10;
  let R = 11;
  let L_steps, R_steps;
  hand = hand[0].toUpperCase();

  numbers.forEach((el) => {
    switch (grid[el][0]) {
      case -1:
        answer += "L";
        L = el;
        break;
      case 1:
        answer += "R";
        R = el;
        break;
      case 0:
        L_steps =
          Math.abs(grid[L][0] - grid[el][0]) +
          Math.abs(grid[L][1] - grid[el][1]);
        R_steps =
          Math.abs(grid[R][0] - grid[el][0]) +
          Math.abs(grid[R][1] - grid[el][1]);
        if (L_steps > R_steps) {
          answer += "R";
          R = el;
        } else if (L_steps < R_steps) {
          answer += "L";
          L = el;
        } else {
          answer += hand;
          eval(`${hand} = el`);
        }
    }
  });

  return answer;
};