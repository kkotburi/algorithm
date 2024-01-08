const solution = (num_list, n) => {
  let answer = num_list.slice(n);
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
};
