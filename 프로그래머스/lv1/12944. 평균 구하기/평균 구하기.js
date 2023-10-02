const solution = (arr) => {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
};
