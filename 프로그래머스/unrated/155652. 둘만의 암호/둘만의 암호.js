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
  ].filter((letter) => !skip.includes(letter));

  for (i = 0; i < s.length; i++) {
    answer +=
      alphabet[(alphabet.indexOf(s.charAt(i)) + index) % alphabet.length];
  }

  return answer;
};