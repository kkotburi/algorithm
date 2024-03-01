const solution = (num_list) => {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    for (let j = 2; num_list[i] / j >= 1; j = j * 2) {
      answer++;
    }
  }
  return answer;
};