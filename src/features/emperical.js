const emperical = (fr, n) => {
  let first = { [Object.keys(fr)[0]]: '0' };
  let last = { [Object.keys(fr)[Object.keys(fr).length - 1]]: '1' };
  let middle = {};

  for (let i = 1; i < Object.keys(fr).length - 1; i++) {
    let sum = 0;
    for (let u = 0; u < i; u++) {
      sum += Object.values(fr)[u];
    }
    middle[Object.keys(fr)[i]] = (sum / n).toFixed(2);
  }

  let emp = { ...first, ...middle, ...last };

  const ordered = Object.keys(emp)
    .sort()
    .reduce((obj, key) => {
      obj[key] = emp[key];
      return obj;
    }, {});

  return ordered;
};

export default emperical;
