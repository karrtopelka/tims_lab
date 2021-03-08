const sa = (inter, mean, n) => {
  let temp = 0;
  for (let i = 0; i < inter.r; i++) {
    temp += mean[i] * [...inter.frequency][i][1];
  }
  return parseFloat((temp / n).toFixed(2));
};

const mo = (inter) => {
  const maximalFrequency = Math.max(...inter.frequency.values());
  const h = parseFloat(((inter.xMax - inter.xMin) / inter.r).toFixed(2));
  let temp = '';
  for (let i = 0; i < inter.r; i++) {
    if ([...inter.frequency][i][1] === maximalFrequency) {
      if (temp !== 0) {
        return `Розподіл мультимодальний. Сукупність неоднорідна`;
      }
      if (i === 0 || i === inter.r - 1) {
        return `Перший або останній інтервали - модальні`;
      }
      // intervals[i][0] + step * (intervals[i][2] - intervals[i - 1][2]) /
      // (2 * intervals[i][2] - intervals[i - 1][2] - intervals[i + 1][2])
      temp =
        2 +
        (h * ([...inter.frequency][i][1] - [...inter.frequency][i - 1][1])) /
          (2 * [...inter.frequency][i][1] -
            [...inter.frequency][i - 1][1] +
            [...inter.frequency][i + 1][1]);
    }
    if (i === inter.r - 1) {
      return `Мода для інтервального розподілу: ${Math.round(temp, 2)}`;
    }
  }
};

const irCharacteristic = (inter, mean, n) => {
  const moda = mo(inter);
  const serAr = sa(inter, mean, n);
  const median = 0;

  return { moda, serAr, median };
};

module.exports = irCharacteristic;
