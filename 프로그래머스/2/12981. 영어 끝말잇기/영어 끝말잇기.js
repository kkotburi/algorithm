const solution = (n, words) => {
  let answer = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      words[i].charAt(0) !== words[i - 1].charAt(words[i - 1].length - 1) ||
      answer.find((v) => v === words[i]) ||
      words[i].length === 1
    ) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
    answer.push(words[i]);
  }
  return [0, 0];
};