const mean = (obj) => {
  let size = Object.keys(obj).length;
  let sum = Object.values(obj).reduce((a, b) => a + b, 0);
  return sum / size;
};

const variance = (obj) => {
  const mean_val = mean(obj);
  let varianc = 0;
  Object.values(obj).forEach((element) => {
    varianc += Math.round(Math.pow(element - mean_val, 2));
  });

  return (varianc / Object.keys(obj).length).toFixed(2);
};

export default variance;
