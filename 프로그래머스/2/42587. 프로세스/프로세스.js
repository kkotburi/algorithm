const solution = (priorities, location) => {
  let answer = 0;
  let array = priorities.map((v, i) => ({ process: v, index: i }));

  while (true) {
    let queue = array.shift();

    if (array.some((v) => v.process > queue.process)) {
      array.push(queue);
    } else {
      answer++;
      if (queue.index === location) return answer;
    }
  }
};
