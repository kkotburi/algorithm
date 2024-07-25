const solution = (elements) => {
  let answer = [];
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = i; j < i + elements.length; j++) {
      sum += elements[j % elements.length];
      answer.push(sum);
    }
  }
  return [...new Set(answer)].length;
};