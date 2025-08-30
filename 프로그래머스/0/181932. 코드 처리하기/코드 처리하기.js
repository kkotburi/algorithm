const solution = (code) => {
  let answer = code
    .replaceAll("1", "")
    .split("")
    .filter((_, i) => i % 2 === 0)
    .join("");
  return answer.length > 0 ? answer : "EMPTY";
};