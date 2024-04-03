const solution = (arr) => {
  let length = Math.max(arr.length, arr[0].length);
  let answer = [];
  for (let i = 0; i < length; i++) {
    if (arr[i]) {
      answer.push([...arr[i], ...new Array(length - arr[i].length).fill(0)]);
    } else {
      answer.push(new Array(length).fill(0));
    }
  }
  return answer;
};
