const switchValues = (arr, index1, index2) => {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
};

const solution = (arr, queries) => {
  for (let i = 0; i < queries.length; i++) {
    switchValues(arr, queries[i][0], queries[i][1]);
  }
  return arr;
};
