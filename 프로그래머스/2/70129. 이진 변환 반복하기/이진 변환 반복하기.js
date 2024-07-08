const solution = (s) => {
  let answer = [0, 0];
  while (s !== "1") {
    answer[0]++;
    answer[1] += s.split("0").length - 1;
    s = s.split("0").join("").length.toString(2);
  }
  return answer;
};