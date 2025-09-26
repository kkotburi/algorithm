const solution = (picture, k) =>
  Array(picture.length * k)
    .fill(0)
    .map((_, i) => picture[~~(i / k)].replace(/./g, (v) => v.repeat(k)));