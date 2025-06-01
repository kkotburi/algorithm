const solution = (sequence, k) => {
  let [left, right] = [0, 0];
  let sum = sequence[0];
  let answer = [0, sequence.length];

  while (left < sequence.length) {
    if (sum < k && right < sequence.length) {
      sum += sequence[++right];
    } else if (sum === k && right - left < answer[1] - answer[0]) {
      answer = [left, right];
      sum += sequence[++right];
    } else sum -= sequence[left++];
  }

  return answer;
};