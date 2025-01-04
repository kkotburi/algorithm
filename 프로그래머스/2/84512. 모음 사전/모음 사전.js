const solution = (word) => {
  const vowels = ["A", "E", "I", "O", "U", ""];
  const vowelsMap = (a) => vowels.map((b) => b + a);

  return Array.from(
    new Set(
      vowels
        .map(vowelsMap)
        .flat()
        .map(vowelsMap)
        .flat()
        .map(vowelsMap)
        .flat()
        .map(vowelsMap)
        .flat()
    )
  )
    .sort()
    .indexOf(word);
};
