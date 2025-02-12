var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length == 0) return resolve([]);

    const results = [];
    let cnt = 0;

    functions.forEach((f, index) => {
      f()
        .then((result) => {
          results[index] = result;
          cnt++;

          if (cnt == functions.length) return resolve(results);
        })
        .catch(reject);
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
