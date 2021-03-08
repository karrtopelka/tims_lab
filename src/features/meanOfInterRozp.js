const meanOfInterRozp = (obj) => {
  const meanValues = [
    parseFloat(((obj.xMin + [...obj.frequency][0][0]) / 2).toFixed(2)),
  ];
  for (let i = 1; i < obj.r; i++) {
    meanValues.push(
      parseFloat(
        (([...obj.frequency][i - 1][0] + [...obj.frequency][i][0]) / 2).toFixed(
          2,
        ),
      ),
    );
  }
  return meanValues;
};

export default meanOfInterRozp;
