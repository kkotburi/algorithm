const solution = (arr, query, n = 0) =>
  n < query.length
    ? solution(
        n % 2 ? arr.slice(query[n]) : arr.slice(0, query[n] + 1),
        query,
        n + 1
      )
    : arr;