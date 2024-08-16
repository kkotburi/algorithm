const solution = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;
  let cache = [];
  let answer = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cache.find((city) => city === cities[i].toUpperCase())) {
      answer++;
      cache = cache.filter((city) => city !== cities[i].toUpperCase());
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    }
    cache.push(cities[i].toUpperCase());
  }
  return answer;
};