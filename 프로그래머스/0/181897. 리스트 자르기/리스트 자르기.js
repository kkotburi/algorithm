const solution = (n, slicer, num_list) => {
  [a, b, c] = slicer;
  let answer = [];
  if (n === 1) {
    answer = num_list.slice(0, b + 1);
  }
  if (n === 2) {
    answer = num_list.slice(a);
  }
  if (n === 3) {
    answer = num_list.slice(a, b + 1);
  }
  if (n === 4) {
    for (let i = a; i <= b; i += c) {
      answer.push(num_list[i]);
    }
  }
  return answer;
};
