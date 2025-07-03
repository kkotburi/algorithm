const solution = (priorities, location) => {
  let array = priorities.map((priority, index) => ({ index, priority }));
  let queue = [];

  while (array.length > 0) {
    let first = array.shift();
    let priority = array.some((v) => v.priority > first.priority);
    if (priority) {
      array.push(first);
    } else {
      queue.push(first);
    }
  }

  return queue.findIndex((v) => v.index === location) + 1;
};