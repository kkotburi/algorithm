const solution = (order) => [...order.toString().matchAll(/[3|6|9]/g)].length;
