const solution = (arr, queries) =>
  queries.length
    ? solution(
        arr.map((v, i) =>
          i >= queries[0][0] && i <= queries[0][1] && !(i % queries[0][2])
            ? v + 1
            : v
        ),
        queries.slice(1)
      )
    : arr;