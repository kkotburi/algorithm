const solution = (arr1, arr2) => {
  let answer = 0;
  let differenceLength = arr1.length - arr2.length;
  if (differenceLength) {
    answer = differenceLength / Math.abs(differenceLength);
  } else {
    let differenceTotal = 0;
    for (let i = 0; i < arr1.length; i++) {
      differenceTotal += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      differenceTotal -= arr2[j];
    }
    if (differenceTotal) {
      answer = differenceTotal / Math.abs(differenceTotal);
    } else {
      answer = 0;
    }
  }
  return answer;
};
