const solution = (array, commands) =>
  commands.map(
    (v) =>
      array
        .slice(v[0] - 1, v[1])
        .sort((a, b) => a - b)
        .slice(v[2] - 1, v[2])[0]
  );