const solution = (arr, queries) => {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let range = arr
      .slice(queries[i][0], queries[i][1] + 1)
      .sort((a, b) => a - b);
    for (let j = 0; j < range.length; j++) {
      if (range[j] > queries[i][2]) {
        answer.push(range[j]);
        break;
      } else if (j === range.length - 1) {
        answer.push(-1);
      }
    }
  }
  return answer;
};
