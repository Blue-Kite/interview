var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, cur) => {
      const item = compactObject(cur);
      if (Boolean(item)) acc.push(item);
      return acc;
    }, []);
  }
  if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).reduce((acc, cur) => {
      const item = compactObject(cur[1]);
      if (Boolean(item)) acc[cur[0]] = item;
      return acc;
    }, {});
  }
  return obj;
};
