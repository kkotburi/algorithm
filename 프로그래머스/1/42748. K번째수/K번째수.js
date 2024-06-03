const solution = (array, commands) =>
  commands.map((command) => {
    const [i, j, k] = command;
    const newArray = array
      .filter((v, l) => l >= i - 1 && l <= j - 1)
      .sort((a, b) => a - b);
    return newArray[k - 1];
  });