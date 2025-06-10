const solution = (msg) => {
  let answer = [];
  let list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});

  for (var i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];

    while (dic[w + c] && i < msg.length - 1) {
      i++;
      w += c;
      c = msg[i + 1];
    }

    answer.push(dic[w]);
    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return answer;
};