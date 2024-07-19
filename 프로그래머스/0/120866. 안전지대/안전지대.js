const solution = (board) => {
  let answer = 0;
  let danger = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  board.forEach((row, column, array) =>
    row.forEach((element, index) => {
      if (
        element !== 1 &&
        !danger.some(([x, y]) => !!array[column + y]?.[index + x])
      )
        answer++;
    })
  );
  return answer;
};