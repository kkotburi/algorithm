const solution = (s, skip, index) => {
  let answer = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetSkip = alphabet.filter((letter) => !skip.includes(letter));

  for (i = 0; i < s.length; i++) {
    const alphabetIndex = alphabetSkip.indexOf(s.charAt(i)) + index;
    if (alphabetIndex < alphabetSkip.length) {
      answer += alphabetSkip[alphabetIndex];
    } else {
      answer += alphabetSkip[alphabetIndex % alphabetSkip.length];
    }
  }

  return answer;
};