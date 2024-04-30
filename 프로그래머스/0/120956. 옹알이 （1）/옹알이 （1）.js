const solution = (babbling) => {
  for (let i = 0; i < babbling.length; i++) {
    babbling[i] = babbling[i]
      .replace("aya", " ")
      .replace("ye", " ")
      .replace("woo", " ")
      .replace("ma", " ");
  }
  return babbling.map((v) => v.replace(/ /g, "")).filter((v) => v === "")
    .length;
};
