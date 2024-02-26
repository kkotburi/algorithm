const solution = (before, after) => {
  for (let i = 0; i < after.length; i++) {
    before = before.replace(after[i], "");
  }
  return before === "" ? 1 : 0;
};
