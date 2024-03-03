const solution = (array, n) => {
  let answer = array[0];
  for (let i = 0; i < array.length; i++) {
    if ((n - array[i]) ** 2 < (n - answer) ** 2) {
      answer = array[i];
    } else if ((n - array[i]) ** 2 === (n - answer) ** 2) {
      if (array[i] < answer) {
        answer = array[i];
      }
    }
  }
  return answer;
};
