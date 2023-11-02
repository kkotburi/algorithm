const solution = (numbers) =>
  numbers.sort((a, b) => b - a)[0] * numbers.sort((a, b) => b - a)[1];
