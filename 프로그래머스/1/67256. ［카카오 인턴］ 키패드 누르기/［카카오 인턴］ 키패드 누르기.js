const solution = (numbers, hand) => {
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let direction = { L: [1, 1], R: [1, 1] };
  hand = hand[0] === "r" ? "R" : "L";

  let answer = numbers.map((x) => {
    if (/[147]/.test(x)) {
      direction.L = [position[x], 1];
      return "L";
    }
    if (/[369]/.test(x)) {
      direction.R = [position[x], 1];
      return "R";
    }

    let distL = Math.abs(position[x] - direction.L[0]) + direction.L[1];
    let distR = Math.abs(position[x] - direction.R[0]) + direction.R[1];

    if (distL === distR) {
      direction[hand] = [position[x], 0];
      return hand;
    }
    if (distL < distR) {
      direction.L = [position[x], 0];
      return "L";
    }

    direction.R = [position[x], 0];

    return "R";
  });

  return answer.join("");
};
