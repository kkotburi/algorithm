const solution = (quiz) =>
  quiz.map((v) => v.split(" = ")).map((v) => (eval(v[0]) == v[1] ? "O" : "X"));
