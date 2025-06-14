const solution = (order) => {
  let answer = 0;
  let box = 1;
  const stack = [];

  while (true) {
    if (order.length === answer) break;

    if (order[answer] === box) {
      answer++;
      box++;
    } else if (stack[stack.length - 1] === order[answer]) {
      stack.pop();
      answer++;
    } else if (stack[stack.length - 1] !== order[answer]) {
      if (order[answer] < stack[stack.length - 1]) {
        break;
      }
      stack.push(box);
      box++;
    }
  }

  return answer;
};