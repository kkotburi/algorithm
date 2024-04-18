const solution = (code) => {
  let mode = 0;
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode ? mode-- : mode++;
    } else if (i % 2 == mode) {
      answer += code[i];
    }
  }
  return answer === "" ? "EMPTY" : answer;
};
