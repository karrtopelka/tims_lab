const kvantiles = (arr) => {
  const data = {
    4: { name: 'Квартил', arr: [] },
    8: { name: 'Октил', arr: [] },
    10: { name: 'Децил', arr: [] },
    100: { name: 'Центил', arr: [] },
    1000: { name: 'Міліл', arr: [] },
  };

  for (let k in data) {
    if (arr.length % k === 0) {
      for (let i = 0; i < k - 1; i++) {
        data[k].arr.push(arr[parseInt((arr.length / k) * (i + 1))]);
      }
    }
  }
  return data;
};

export default kvantiles;
