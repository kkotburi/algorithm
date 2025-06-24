const solution = (numbers) => {
  const buckets = [];

  for (const n of numbers) {
    const s = String(n);
    const l = s.length;
    let j = "";

    for (let i = 0; i < 4; i++) {
      j += s[l > i ? i : i % l];
    }

    j = 9999 - j;
    buckets[j] = buckets[j] ? buckets[j] + s : s;
  }

  const answer = buckets.join``;

  return answer[0] === "0" ? "0" : answer;
};