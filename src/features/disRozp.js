const disRozp = (arr, vr) => {
  let moda = Object.keys(vr).filter(
    (key) => vr[key] === Math.max(...Object.values(vr)),
  );
  let dmedian =
    arr.length % 2 === 0
      ? (arr[Math.ceil(arr.length / 2)] + arr[Math.ceil(arr.length / 2) - 1]) /
        2
      : arr[Math.ceil(arr.length / 2) - 1];
  let dserAr = (arr.reduce((sum, val) => (sum += val)) / arr.length).toFixed(2);
  return { moda, dmedian, dserAr };
};

export default disRozp;
