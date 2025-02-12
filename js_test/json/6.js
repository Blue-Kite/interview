var join = function (arr1, arr2) {
  const resultmap = {};
  for (const a of arr1) {
    resultmap[a.id] = a;
  }
  for (const b of arr2) {
    console.log(b);
    resultmap[b.id] = { ...resultmap[b.id], ...b };
  }
  //어차피 객체에서 키가 동일하면 덮어씌워짐
  return Object.values(resultmap);
};
