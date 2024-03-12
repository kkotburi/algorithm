const solution = (s) => {
  s = s.split(" ");
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] !== "Z" && s[i] !== "Z") {
      answer += +s[i];
    }
  }
  return answer;
};
