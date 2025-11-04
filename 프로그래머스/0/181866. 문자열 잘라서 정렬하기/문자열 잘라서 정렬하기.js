const solution = (myString) =>
  myString
    .split("x")
    .sort()
    .filter((string) => string !== "");