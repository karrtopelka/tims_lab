const irDeviationData = (means, inter) => {
  let arr = [];
  for (let j = 0; j < inter.r; j++) {
    for (let i = 0; i < [...inter.frequency][j][1]; i++) {
      arr.push(means[j]);
    }
  }
  return arr;
};

module.exports = irDeviationData;
