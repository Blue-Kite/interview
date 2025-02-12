var timeLimit = function (fn, t) {
  return async function (...args) {
    const timelimit = new Promise((_, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );
    return Promise.race([fn(...args), timelimit]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
