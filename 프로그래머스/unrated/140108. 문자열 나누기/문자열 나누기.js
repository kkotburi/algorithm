const solution = (s) => {
  let answer = [];
  for (i = 0; i < s.length; i++) {
    if (i === answer.join("").length) {
      let classS = [s[i]];
      for (j = i + 1; j < s.length; j++) {
        if (
          classS.length / 2 !==
          classS.filter((letter) => letter === s[i]).length
        ) {
          classS.push(s[j]);
        } else {
          answer.push(classS.join(""));
          break;
        }
      }
    }
  }
  return answer.length + 1;
};