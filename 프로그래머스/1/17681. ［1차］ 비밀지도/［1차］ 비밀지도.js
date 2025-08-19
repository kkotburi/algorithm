const solution = (n, arr1, arr2) =>
  arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );

const addZero = (n, s) => "0".repeat(n - s.length) + s;
