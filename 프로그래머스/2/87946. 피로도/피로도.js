const dfs = (count, dungeons, visited, k) => {
  let answer = count;
  dungeons.forEach((dungeon, i) => {
    if (!visited[i] && dungeon[0] <= k) {
      visited[i] = 1;
      answer = Math.max(
        answer,
        dfs(count + 1, dungeons, visited, k - dungeon[1])
      );
      visited[i] = 0;
    }
  });
  return answer;
};

const solution = (k, dungeons) => {
  let visited = new Array(dungeons.length).fill(0);
  let answer = dfs(0, dungeons, visited, k);
  return answer;
};