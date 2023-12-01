const solution = (arr, k) => {
  let answer = [];
  if (k % 2) {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i] * k);
    }
  } else {
    for (let j = 0; j < arr.length; j++) {
      answer.push(arr[j] + k);
    }
  }
  return answer;
};
