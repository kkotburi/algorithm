const solution = (survey, choices) => {
  let answer = "";
  let indicators = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    let type = survey[i].split("")[choices[i] < 4 ? 0 : 1];
    indicators[type] += Math.abs(choices[i] - 4);
  }
  for (let j = 0; j < Object.keys(indicators).length; j += 2) {
    Object.values(indicators)[j] >= Object.values(indicators)[j + 1]
      ? (answer += Object.keys(indicators)[j])
      : (answer += Object.keys(indicators)[j + 1]);
  }
  return answer;
};