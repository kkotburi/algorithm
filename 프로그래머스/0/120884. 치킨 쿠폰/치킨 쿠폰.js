const solution = (chicken) => {
  let answer = parseInt(chicken / 10);
  let remain = parseInt(chicken / 10) + (chicken % 10);
  while (remain >= 10) {
    answer += parseInt(remain / 10);
    remain = parseInt(remain / 10) + (remain % 10);
  }
  return answer;
};
