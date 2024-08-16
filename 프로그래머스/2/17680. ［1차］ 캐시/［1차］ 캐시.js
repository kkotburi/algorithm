const solution = (cacheSize, cities) => {
  let cache = [];
  let answer = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cache.find((v) => v.toUpperCase() === cities[i].toUpperCase())) {
      answer++;
      cache = cache.filter((v) => v.toUpperCase() !== cities[i].toUpperCase());
    } else {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.shift();
      }
    }
    cache.push(cities[i]);
  }
  return cacheSize ? answer : cities.length * 5;
};