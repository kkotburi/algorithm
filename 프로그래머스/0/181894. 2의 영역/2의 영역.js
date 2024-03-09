const solution = (arr) => {
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      start = i;
      for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] === 2) {
          end = j + 1;
          break;
        }
      }
      break;
    }
  }
  let answer = arr.slice(start, end);
  return answer.length ? answer : [-1];
};
