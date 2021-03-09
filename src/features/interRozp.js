const interRozp = (obj, r) => {
  const xMin = Math.min(...Object.keys(obj));
  const xMax = Math.max(...Object.keys(obj));
  const h = parseFloat(((xMax - xMin) / r).toFixed(2));
  const intervalsEdge = [xMin + h];

  for (let i = 1; i < r - 1; i++) {
    intervalsEdge.push(
      parseFloat((intervalsEdge[intervalsEdge.length - 1] + h).toFixed(2)),
    );
  }

  intervalsEdge.push(xMax);

  const frequency = new Map();
  intervalsEdge.forEach((interval) => frequency.set(interval, 0));
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const element = Object.keys(obj)[i];
    for (let u = 0; u < intervalsEdge.length; u++) {
      const el = intervalsEdge[u];
      if (element <= el) {
        frequency.set(el, frequency.get(el) + parseInt(Object.values(obj)[i]));
        break;
      }
    }
  }

  return { frequency, xMin, xMax, r };
};

export default interRozp;
