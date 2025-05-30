const solution = (sequence, k) => {
  const answer = [];
  let [start, end] = [0, 0];
  let sum = sequence[start];

  while (end < sequence.length) {
    if (sum < k) {
      sum += sequence[++end];
    } else if (sum > k) {
      sum -= sequence[start++];
    } else {
      answer.push([start, end]);
      sum += sequence[++end];
      sum -= sequence[start++];
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
};