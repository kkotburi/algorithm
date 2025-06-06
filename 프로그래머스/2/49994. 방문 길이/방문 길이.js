const solution = (dirs) => {
  const direction = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let current = [0, 0];
  let answer = new Set();

  for (let dir of dirs) {
    let currentX = current[0] + direction[dir][0];
    let currentY = current[1] + direction[dir][1];

    if (currentX > 5 || currentX < -5 || currentY > 5 || currentY < -5)
      continue;

    answer.add("" + current[0] + current[1] + currentX + currentY);
    answer.add("" + currentX + currentY + current[0] + current[1]);

    current = [currentX, currentY];
  }

  return answer.size / 2;
};