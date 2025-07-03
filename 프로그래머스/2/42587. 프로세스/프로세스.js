const solution = (priorities, location) => {
  let answer = [];
  let array = priorities.map((priority, index) => ({ index, priority }));

  while (array.length > 0) {
    let first = array.shift();
    let priority = array.some((v) => v.priority > first.priority);

    if (priority) {
      array.push(first);
    } else {
      answer.push(first);
    }
  }

  return answer.findIndex((v) => v.index === location) + 1;
};