const solution = (hp) => {
  const general = Math.floor(hp / 5);
  const soldier = Math.floor((hp % 5) / 3);
  const ergate = (hp % 5) % 3;
  return general + soldier + ergate;
};