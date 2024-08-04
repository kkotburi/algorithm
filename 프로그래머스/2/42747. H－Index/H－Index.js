const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((v, i) => v > i).length;
