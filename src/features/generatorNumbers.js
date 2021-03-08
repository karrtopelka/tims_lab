const generatorNumbers = (n, a, b) => {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (b - a + 1) + a),
  );
};

export default generatorNumbers;
