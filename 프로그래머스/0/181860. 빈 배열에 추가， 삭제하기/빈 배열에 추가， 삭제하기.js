const solution = (arr, flag) => {
  let answer = [];
  for (let i = 0; i < flag.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      flag[i] ? answer.push(arr[i], arr[i]) : answer.pop();
    }
  }
  return answer;
};
