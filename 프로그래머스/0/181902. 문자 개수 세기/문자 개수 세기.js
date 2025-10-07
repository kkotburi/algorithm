const solution = (my_string) =>
  [...my_string].reduce(
    (acc, cur) => (
      acc[cur.charCodeAt() - (cur === cur.toLowerCase() ? 71 : 65)]++, acc
    ),
    Array(52).fill(0)
  );