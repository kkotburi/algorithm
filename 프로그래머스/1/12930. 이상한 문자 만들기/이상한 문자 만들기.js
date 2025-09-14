const solution = (s) => {
  s = s.split(" ");
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    answer += " ";
    for (let j = 0; j < s[i].length; j++) {
      j % 2
        ? (answer += s[i][j].toLowerCase())
        : (answer += s[i][j].toUpperCase());
    }
  }
  return answer.substring(1);
};