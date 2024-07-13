const solution = (people, limit) => {
  people.sort((a, b) => b - a);
  let answer = people.length;
  for (let i = 0; i < answer - 1; i++) {
    if (people[i] + people[answer - 1] <= limit) {
      answer--;
    }
  }
  return answer;
};