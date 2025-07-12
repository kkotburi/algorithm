const solution = (numbers, hand) => {
  hand = hand[0] === "r" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let move = { L: [1, 1], R: [1, 1] };

  return numbers
    .map((v) => {
      if (/[147]/.test(v)) {
        move.L = [position[v], 1];
        return "L";
      }
      if (/[369]/.test(v)) {
        move.R = [position[v], 1];
        return "R";
      }
      let distL = Math.abs(position[v] - move.L[0]) + move.L[1];
      let distR = Math.abs(position[v] - move.R[0]) + move.R[1];
      if (distL === distR) {
        move[hand] = [position[v], 0];
        return hand;
      }
      if (distL < distR) {
        move.L = [position[v], 0];
        return "L";
      }
      move.R = [position[v], 0];
      return "R";
    })
    .join("");
};
