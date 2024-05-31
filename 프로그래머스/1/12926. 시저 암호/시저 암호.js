const solution = (s, n) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt() + n;
    if ((code > 90 && s[i].charCodeAt() < 91) || code > 122) {
      code -= 26;
    }
    answer += String.fromCharCode(code);
  }
  return answer.replace(/[^a-zA-z]/g, " ");
};