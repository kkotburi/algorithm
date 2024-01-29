const solution = (arr, intervals) => {
  let answer = [];
  for (let i = 0; i < intervals.length; i++) {
    let answerPush = arr.slice(intervals[i][0], intervals[i][1] + 1);
    for (let j = 0; j < answerPush.length; j++) {
      answer.push(answerPush[j]);
    }
  }
  return answer;
};
