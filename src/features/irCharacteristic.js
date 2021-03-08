const getIntervals = (inter) => {
  let temp = [
    [
      inter.xMin,
      [...inter.frequency][0][0],
      inter.frequency.get([...inter.frequency][0][0]),
    ],
  ];
  for (let i = 1; i < inter.frequency.size; i++) {
    temp.push([
      [...inter.frequency][i - 1][0],
      [...inter.frequency][i][0],
      inter.frequency.get([...inter.frequency][i][0]),
    ]);
  }
  return temp;
};

const sa = (inter, mean, n) => {
  let temp = 0;
  for (let i = 0; i < inter.r; i++) {
    temp += mean[i] * [...inter.frequency][i][1];
  }
  return parseFloat((temp / n).toFixed(2));
};

const mo = (inter, intervals, h) => {
  const maximalFrequency = Math.max(...inter.frequency.values());
  let temp = 0;

  for (let i = 0; i < inter.r; i++) {
    if (intervals[i][2] === maximalFrequency) {
      if (temp !== 0) {
        return `Розподіл мультимодальний. Сукупність неоднорідна`;
      }
      if (i === 0 || i === inter.r - 1) {
        return `Перший або останній інтервали - модальні`;
      }
      temp =
        intervals[i][0] +
        (h * (intervals[i][2] - intervals[i - 1][2])) /
          (2 * intervals[i][2] - intervals[i - 1][2] - intervals[i + 1][2]);
    }
    if (i === inter.r - 1) {
      return `${Math.round(temp, 2)}`;
    }
  }
};

const me = (inter, intervals, n, h) => {
  let temp = 0;
  let mass = [intervals[0][2]];

  for (let i = 1; i < inter.r; i++) {
    mass.push(mass[i - 1] + intervals[i][2]);
    if (mass[i] >= n / 2) {
      if (mass[0] >= n / 2) {
        return `Медіанний інтервал перший. Обчислити не вдастся`;
      }
      return `${parseFloat(
        (
          intervals[i][0] +
          (h * (0.5 * n - mass[i - 1])) / intervals[i][2]
        ).toFixed(2),
      )}`;
    }
  }

  return temp;
};

const irCharacteristic = (inter, mean, n) => {
  const intervals = getIntervals(inter);
  const h = parseFloat(((inter.xMax - inter.xMin) / inter.r).toFixed(2));

  const moda = mo(inter, intervals, h);
  const serAr = sa(inter, mean, n);
  const median = me(inter, intervals, n, h);

  return { moda, serAr, median };
};

export default irCharacteristic;
