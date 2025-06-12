const solution = (msg) => {
  let answer = [];
  let dic = [""].concat(
    [...Array(26).keys()].map((v) => String.fromCharCode(v + 65))
  );

  while (msg.length) {
    for (let i = dic.length - 1; i >= 0; i--) {
      let characters = dic[i];

      if (new RegExp("^" + characters).test(msg)) {
        let newCharacter = msg.substr(0, characters.length + 1);

        if (dic.indexOf(newCharacter) < 0) dic.push(newCharacter);

        msg = msg.substr(characters.length);
        answer.push(i);
        break;
      }
    }
  }

  return answer;
};