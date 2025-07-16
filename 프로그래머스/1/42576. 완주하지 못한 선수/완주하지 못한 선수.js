const solution = (participant, completion) =>
  participant.find(
    (i) => !completion[i]--,
    completion.map((v) => (completion[v] = (completion[v] | 0) + 1))
  );
