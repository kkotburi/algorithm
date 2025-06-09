const solution = (msg) => {
  const answer = [];
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;

  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = "";

    while (dict[(longest = msg.substring(i, j))] === undefined) --j;

    answer.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return answer;
};