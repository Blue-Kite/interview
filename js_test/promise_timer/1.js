var addTwoPromises = async function (promise1, promise2) {
  const result = await promise1;
  const result2 = await promise2;
  return result + result2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
