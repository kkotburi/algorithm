const solution = (players, callings) => {
  const list = {};
  players.forEach((v, i) => (list[v] = i));

  for (let call of callings) {
    let i = list[call];
    let name1 = players[i];
    let name2 = players[i - 1];

    list[call] -= 1;
    list[name2] += 1;

    players[i] = name2;
    players[i - 1] = name1;
  }

  return players;
};
