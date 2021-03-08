const asymetryExsces = (arr) => {
  const n = arr.length;
  const mean = parseFloat((arr.reduce((a, b) => a + b, 0) / n).toFixed(2));
  const centralMoments = [0];
  const startingMoments = [mean];

  for (let i = 2; i < 5; i++) {
    centralMoments.push(
      parseFloat(
        (
          arr.map((x) => (x - mean) ** i).reduce((a, b) => a + b, 0) / n
        ).toFixed(2),
      ),
    );
    startingMoments.push(
      parseFloat(
        (arr.map((x) => x ** i).reduce((a, b) => a + b, 0) / n).toFixed(2),
      ),
    );
  }

  const asymetry = parseFloat(
    (centralMoments[2] / centralMoments[1] ** 1.5).toFixed(2),
  );

  const exsces = parseFloat(
    (centralMoments[3] / centralMoments[1] ** 2 - 3).toFixed(2),
  );

  const am =
    asymetry < 0
      ? 'Статистичний матеріал скошений вліво'
      : asymetry > 0
      ? 'Статистичний матеріал скошений вправо'
      : 'Статистичний матеріал симетричний';

  const em =
    exsces < 0
      ? 'Статистичний матеріал низьковершинний'
      : asymetry > 0
      ? 'Статистичний матеріал високовершинний'
      : 'Статистичний матеріал нормальновершинний';

  return { asymetry, exsces, am, em };
};

export default asymetryExsces;
