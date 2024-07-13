const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let lightest = 0;
  let heaviest = people.length - 1;
  let answer = 0;
  while (lightest <= heaviest) {
    if (people[lightest] + people[heaviest] <= limit) {
      lightest++;
    }
    heaviest--;
    answer++;
  }
  return answer;
};