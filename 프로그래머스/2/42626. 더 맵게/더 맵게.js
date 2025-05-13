const solution = (scoville, K) => {
  scoville.sort((a, b) => b - a);
  let count = 0;
  let underK = [];
  let flag = 0;

  for (let i = 0; i < scoville.length; ++i) {
    if (scoville[i] < K) {
      underK.push(scoville[i]);
    } else {
      flag = 1;
    }
  }

  let mixed = [];
  let i = 0;
  let n1 = 0;
  let n2 = 0;

  while (1) {
    if (mixed[i] !== undefined) {
      if (underK.length) {
        if (underK.at(-1) < mixed[i]) {
          n1 = underK.pop();
        } else {
          n1 = mixed[i];
          i++;
        }
      } else {
        n1 = mixed[i];
        i++;
      }
    } else {
      if (underK.length) {
        n1 = underK.pop();
      } else {
        break;
      }
    }

    if (mixed[i] !== undefined) {
      if (underK.length) {
        if (underK.at(-1) < mixed[i]) {
          n2 = underK.pop();
        } else {
          n2 = mixed[i];
          i++;
        }
      } else {
        n2 = mixed[i];
        i++;
      }
    } else {
      if (underK.length) {
        n2 = underK.pop();
      } else {
        count++;
        break;
      }
    }

    if (n1 + n2 * 2 < K) {
      mixed.push(n1 + n2 * 2);
    } else {
      flag = 1;
    }

    count++;
  }

  if (flag === 1) {
    return count;
  } else {
    return -1;
  }
};