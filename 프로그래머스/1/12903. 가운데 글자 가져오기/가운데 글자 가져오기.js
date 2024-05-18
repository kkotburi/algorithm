const solution = (s) =>
  s.length % 2
    ? s.substr(Math.floor(s.length / 2), 1)
    : s.substr(Math.floor(s.length / 2 - 1), 2);
