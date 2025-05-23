const solution = (dartResult) => {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1, undefined: 1 };
  let answer = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < answer.length; i++) {
    let split = answer[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    let score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && answer[i - 1]) answer[i - 1] *= options["*"];

    answer[i] = score;
  }

  return answer.reduce((a, b) => a + b);
};