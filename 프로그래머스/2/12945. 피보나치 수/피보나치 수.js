const solution = (n) => {
  let result = [0, 1];

  while (result.length !== n + 1) {
    result.push(
      (result[result.length - 2] + result[result.length - 1]) % 1234567
    );
  }

  return result[n];
};