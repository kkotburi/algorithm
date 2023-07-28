const solution = (myString) => {
  return myString
    .split("x")
    .sort()
    .filter((string) => string !== "");
};