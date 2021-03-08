const variativeRowCounter = (arr) => {
  let out = arr.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  return out;
};

export default variativeRowCounter;
