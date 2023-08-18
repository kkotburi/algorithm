const solution = (s) => {
  let answer0 = s.replaceAll("zero", "0");
  let answer1 = answer0.replaceAll("one", "1");
  let answer2 = answer1.replaceAll("two", "2");
  let answer3 = answer2.replaceAll("three", "3");
  let answer4 = answer3.replaceAll("four", "4");
  let answer5 = answer4.replaceAll("five", "5");
  let answer6 = answer5.replaceAll("six", "6");
  let answer7 = answer6.replaceAll("seven", "7");
  let answer8 = answer7.replaceAll("eight", "8");
  let answer9 = answer8.replaceAll("nine", "9");

  return Number(answer9);
};