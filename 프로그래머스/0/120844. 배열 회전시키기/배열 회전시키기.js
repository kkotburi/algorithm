const solution = (numbers, direction) => {
  let answer = [];
  if (direction === "right") {
    answer = [...numbers.slice(-1), ...numbers.slice(0, -1)];
  } else {
    answer = [...numbers.slice(1), ...numbers.slice(0, 1)];
  }
  return answer;
};
