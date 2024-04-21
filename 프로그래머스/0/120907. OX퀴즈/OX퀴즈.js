const solution = (quiz) => {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    quiz[i] = quiz[i].split(" ");
    switch (quiz[i][1]) {
      case "+":
        Number(quiz[i][0]) + Number(quiz[i][2]) === Number(quiz[i][4])
          ? answer.push("O")
          : answer.push("X");
        break;
      case "-":
        Number(quiz[i][0]) - Number(quiz[i][2]) === Number(quiz[i][4])
          ? answer.push("O")
          : answer.push("X");
        break;
    }
  }
  return answer;
};