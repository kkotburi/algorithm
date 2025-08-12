const solution = (k, dungeons) => {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(0);

  const dfs = (k, count) => {
    answer = Math.max(count, answer);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = 1;
        dfs(k - dungeons[i][1], count + 1);
        visited[i] = 0;
      }
    }
  };

  dfs(k, 0);

  return answer;
};